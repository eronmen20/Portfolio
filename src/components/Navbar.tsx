"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, FlaskConical, ChevronDown, Beaker, BookOpen, Database, Code2 } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";
import Link from "next/link";
import content from "@/data/content.json";

const categoryMeta: Record<string, { icon: React.ElementType; color: string }> = {
  "Laboratory Experience": { icon: Beaker, color: "text-emerald-500" },
  "Education": { icon: BookOpen, color: "text-blue-500" },
  "Data Management": { icon: Database, color: "text-violet-500" },
  "Web Development": { icon: Code2, color: "text-orange-500" },
};

// Group projects by category
const groupedProjects = content.projects.reduce<Record<string, typeof content.projects>>((acc, p) => {
  if (!acc[p.category]) acc[p.category] = [];
  acc[p.category].push(p);
  return acc;
}, {});

const categoryOrder = ["Laboratory Experience", "Education", "Data Management", "Web Development"];

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#portfolio", label: "Portfolio", hasMega: true },
  // { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications & Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setMegaOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const openMega = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMegaOpen(true);
  };

  const closeMega = () => {
    timeoutRef.current = setTimeout(() => setMegaOpen(false), 150);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
              className="flex items-center gap-2"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-violet-500 to-orange-500 flex items-center justify-center shadow-md">
                <FlaskConical className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-lg text-foreground">Portfolio</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.hasMega ? (
                  <div
                    key={link.href}
                    className="relative"
                    ref={megaRef}
                    onMouseEnter={openMega}
                    onMouseLeave={closeMega}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer",
                        activeSection === link.href.slice(1)
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {link.label}
                      <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", megaOpen && "rotate-180")} />
                      {activeSection === link.href.slice(1) && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"
                        />
                      )}
                    </button>

                    {/* Mega Menu Dropdown */}
                    <AnimatePresence>
                      {megaOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                          onMouseEnter={openMega}
                          onMouseLeave={closeMega}
                        >
                          <div className="bg-card border border-border rounded-2xl shadow-xl p-5 min-w-[640px] max-w-[780px]">
                            <div className="grid grid-cols-2 gap-5">
                              {categoryOrder.map((cat) => {
                                const projects = groupedProjects[cat];
                                if (!projects) return null;
                                const meta = categoryMeta[cat] || { icon: Beaker, color: "text-muted-foreground" };
                                const Icon = meta.icon;
                                return (
                                  <div key={cat} className="space-y-2.5">
                                    {/* Category Header */}
                                    <div className="flex items-center gap-2 pb-1.5 border-b border-border/50">
                                      <Icon className={cn("w-4 h-4", meta.color)} />
                                      <span className="text-xs font-heading font-semibold text-foreground uppercase tracking-wider">
                                        {cat}
                                      </span>
                                    </div>
                                    {/* Project List */}
                                    <div className="space-y-1">
                                      {projects.map((p) => (
                                        <Link
                                          key={p.slug}
                                          href={`/projects/${p.slug}`}
                                          onClick={() => setMegaOpen(false)}
                                          className="group flex items-start gap-2.5 px-2.5 py-2 rounded-lg hover:bg-muted/70 transition-colors"
                                        >
                                          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5 overflow-hidden border border-border/40">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                              src={p.image}
                                              alt=""
                                              className="w-full h-full object-cover"
                                              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                                            />
                                          </div>
                                          <div className="min-w-0">
                                            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                                              {p.title}
                                            </p>
                                            <p className="text-xs text-muted-foreground line-clamp-1">
                                              {p.tags.slice(0, 3).join(" · ")}
                                            </p>
                                          </div>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                            {/* Footer link */}
                            <div className="mt-4 pt-3 border-t border-border/50">
                              <Link
                                href="/#portfolio"
                                onClick={() => setMegaOpen(false)}
                                className="text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                              >
                                View all projects →
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className={cn(
                      "px-3 py-2 rounded-lg text-sm font-medium transition-colors relative",
                      activeSection === link.href.slice(1)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.label}
                    {activeSection === link.href.slice(1) && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"
                      />
                    )}
                  </a>
                )
              )}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 glass shadow-xl lg:hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) =>
                link.hasMega ? (
                  <div key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </button>
                    {/* Show categories inline on mobile */}
                    <div className="pl-6 pb-2 space-y-1">
                      {categoryOrder.map((cat) => {
                        const projects = groupedProjects[cat];
                        if (!projects) return null;
                        return (
                          <div key={cat}>
                            <p className="px-3 py-1.5 text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider">
                              {cat}
                            </p>
                            {projects.map((p) => (
                              <Link
                                key={p.slug}
                                href={`/projects/${p.slug}`}
                                onClick={() => setMobileOpen(false)}
                                className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                              >
                                {p.title}
                              </Link>
                            ))}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                      activeSection === link.href.slice(1)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
