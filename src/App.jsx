import { useState } from "react";

const COMPONENTS = [
  { id: "topbar", label: "Top Bar", icon: "▬", desc: "Announcement or utility strip", color: "#f59e0b" },
  { id: "nav", label: "Navigation", icon: "≡", desc: "Primary navigation bar", color: "#3b82f6" },
  { id: "hero", label: "Hero Section", icon: "◈", desc: "Full-width banner with CTA", color: "#8b5cf6" },
  { id: "features", label: "Features", icon: "⊞", desc: "Feature grid or highlights", color: "#10b981" },
  { id: "content", label: "Content Block", icon: "❑", desc: "Text and media section", color: "#f43f5e" },
  { id: "gallery", label: "Gallery", icon: "⊡", desc: "Image or media grid", color: "#06b6d4" },
  { id: "testimonials", label: "Testimonials", icon: "❝", desc: "Social proof section", color: "#f97316" },
  { id: "cta", label: "Call to Action", icon: "►", desc: "Conversion banner", color: "#ec4899" },
  { id: "pricing", label: "Pricing", icon: "$", desc: "Pricing tiers table", color: "#6366f1" },
  { id: "faq", label: "FAQ", icon: "?", desc: "Frequently asked questions", color: "#14b8a6" },
  { id: "footer", label: "Footer", icon: "▬", desc: "Footer with links and info", color: "#64748b" },
];

const PREVIEW_HEIGHTS = {
  topbar: 32,
  nav: 64,
  hero: 200,
  features: 160,
  content: 140,
  gallery: 150,
  testimonials: 120,
  cta: 100,
  pricing: 180,
  faq: 130,
  footer: 90,
};

const PREVIEW_CONTENT = {
  topbar: () => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", gap: 8 }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f59e0b", display: "inline-block" }} />
      <span style={{ fontSize: 11, color: "#78350f", letterSpacing: "0.05em" }}>FREE SHIPPING ON ORDERS OVER $50 · USE CODE WELCOME10</span>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f59e0b", display: "inline-block" }} />
    </div>
  ),
  nav: () => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "100%", padding: "0 24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 28, height: 28, borderRadius: 6, background: "linear-gradient(135deg,#3b82f6,#8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}>L</span>
        </div>
        <span style={{ fontWeight: 700, fontSize: 15, color: "#0f172a" }}>Logo</span>
      </div>
      <div style={{ display: "flex", gap: 20 }}>
        {["Home", "About", "Services", "Blog", "Contact"].map(l => (
          <span key={l} style={{ fontSize: 12, color: "#475569", fontWeight: 500 }}>{l}</span>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <div style={{ padding: "4px 12px", border: "1px solid #e2e8f0", borderRadius: 5, fontSize: 11, color: "#64748b" }}>Login</div>
        <div style={{ padding: "4px 12px", background: "#3b82f6", borderRadius: 5, fontSize: 11, color: "#fff" }}>Sign Up</div>
      </div>
    </div>
  ),
  hero: () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", background: "linear-gradient(135deg,#f0f4ff 0%,#faf5ff 100%)", gap: 12 }}>
      <div style={{ fontSize: 10, letterSpacing: "0.15em", color: "#8b5cf6", fontWeight: 600, textTransform: "uppercase" }}>Welcome to our platform</div>
      <div style={{ fontSize: 22, fontWeight: 800, color: "#0f172a", textAlign: "center", lineHeight: 1.2 }}>Build something<br/><span style={{ color: "#8b5cf6" }}>extraordinary</span></div>
      <div style={{ fontSize: 11, color: "#64748b", textAlign: "center", maxWidth: 240 }}>The fastest way to launch your next big idea with confidence</div>
      <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
        <div style={{ padding: "6px 16px", background: "#8b5cf6", borderRadius: 6, fontSize: 11, color: "#fff", fontWeight: 600 }}>Get Started</div>
        <div style={{ padding: "6px 16px", border: "1px solid #cbd5e1", borderRadius: 6, fontSize: 11, color: "#475569" }}>Learn More</div>
      </div>
    </div>
  ),
  features: () => (
    <div style={{ padding: "16px 24px" }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", textAlign: "center", marginBottom: 12 }}>Why choose us?</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
        {[["⚡","Fast","Blazing speed"],["🔒","Secure","Enterprise grade"],["🎨","Beautiful","Crafted with love"]].map(([ic,t,d]) => (
          <div key={t} style={{ background: "#f8fafc", borderRadius: 8, padding: "10px 8px", textAlign: "center" }}>
            <div style={{ fontSize: 16, marginBottom: 4 }}>{ic}</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#0f172a" }}>{t}</div>
            <div style={{ fontSize: 9, color: "#94a3b8", marginTop: 2 }}>{d}</div>
          </div>
        ))}
      </div>
    </div>
  ),
  content: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 24, padding: "16px 24px", height: "100%" }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: "#0f172a", marginBottom: 6 }}>Our Story</div>
        <div style={{ fontSize: 10, color: "#64748b", lineHeight: 1.6 }}>We started with a simple mission: make great tools accessible to everyone. Over the years we've built a platform that thousands of teams rely on daily.</div>
        <div style={{ marginTop: 10, fontSize: 10, color: "#3b82f6", fontWeight: 600 }}>Read more →</div>
      </div>
      <div style={{ width: 100, height: 80, borderRadius: 10, background: "linear-gradient(135deg,#dbeafe,#ede9fe)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: 28 }}>🖼️</span>
      </div>
    </div>
  ),
  gallery: () => (
    <div style={{ padding: "12px 24px" }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: "#0f172a", marginBottom: 10, textAlign: "center" }}>Gallery</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6 }}>
        {["#dbeafe","#ede9fe","#dcfce7","#fef3c7","#fce7f3","#cffafe","#fee2e2","#f3e8ff"].map((c,i) => (
          <div key={i} style={{ height: 48, borderRadius: 6, background: c }} />
        ))}
      </div>
    </div>
  ),
  testimonials: () => (
    <div style={{ padding: "12px 24px" }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: "#0f172a", marginBottom: 10, textAlign: "center" }}>What people say</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 8 }}>
        {[["Alex M.","Absolutely love it! Changed how we work completely."],["Sara K.","The best tool we've ever invested in. Period."]].map(([n,t]) => (
          <div key={n} style={{ background: "#f8fafc", borderRadius: 8, padding: 10 }}>
            <div style={{ fontSize: 10, color: "#475569", fontStyle: "italic", marginBottom: 6 }}>"{t}"</div>
            <div style={{ fontSize: 10, fontWeight: 700, color: "#0f172a" }}>— {n}</div>
          </div>
        ))}
      </div>
    </div>
  ),
  cta: () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", background: "linear-gradient(135deg,#1e1b4b,#312e81)", gap: 10 }}>
      <div style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>Ready to get started?</div>
      <div style={{ fontSize: 11, color: "#a5b4fc" }}>Join 10,000+ teams already using our platform</div>
      <div style={{ padding: "6px 20px", background: "#fff", borderRadius: 6, fontSize: 11, color: "#312e81", fontWeight: 700, marginTop: 4 }}>Start Free Trial →</div>
    </div>
  ),
  pricing: () => (
    <div style={{ padding: "12px 24px" }}>
      <div style={{ fontSize: 13, fontWeight: 800, color: "#0f172a", textAlign: "center", marginBottom: 12 }}>Simple Pricing</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
        {[["Starter","$9","Basic features"],["Pro","$29","Everything in Starter"],["Enterprise","$99","Custom everything"]].map(([n,p,d],i) => (
          <div key={n} style={{ background: i===1 ? "linear-gradient(135deg,#6366f1,#8b5cf6)" : "#f8fafc", borderRadius: 10, padding: "12px 8px", textAlign: "center" }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: i===1?"#fff":"#0f172a" }}>{n}</div>
            <div style={{ fontSize: 18, fontWeight: 900, color: i===1?"#fff":"#0f172a", margin: "4px 0" }}>{p}</div>
            <div style={{ fontSize: 9, color: i===1?"#c7d2fe":"#94a3b8" }}>{d}</div>
            <div style={{ marginTop: 8, padding: "3px 0", background: i===1?"rgba(255,255,255,0.2)":"#e2e8f0", borderRadius: 4, fontSize: 9, color: i===1?"#fff":"#475569" }}>Select →</div>
          </div>
        ))}
      </div>
    </div>
  ),
  faq: () => (
    <div style={{ padding: "12px 24px" }}>
      <div style={{ fontSize: 13, fontWeight: 800, color: "#0f172a", marginBottom: 10, textAlign: "center" }}>Frequently Asked Questions</div>
      {[["How does it work?","Simply sign up, choose a plan and start building."],["Can I cancel anytime?","Yes, no commitments. Cancel with one click."],["Is there a free trial?","Absolutely! 14 days free, no card required."]].map(([q,a]) => (
        <div key={q} style={{ borderBottom: "1px solid #f1f5f9", padding: "6px 0" }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: "#0f172a", marginBottom: 2 }}>Q: {q}</div>
          <div style={{ fontSize: 9, color: "#64748b" }}>{a}</div>
        </div>
      ))}
    </div>
  ),
  footer: () => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "100%", padding: "0 24px", background: "#0f172a" }}>
      <div>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>YourBrand</div>
        <div style={{ fontSize: 9, color: "#64748b", marginTop: 2 }}>© 2025 All rights reserved</div>
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        {["Privacy","Terms","Contact","Docs"].map(l => (
          <span key={l} style={{ fontSize: 10, color: "#94a3b8" }}>{l}</span>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        {["𝕏","in","gh"].map(s => (
          <div key={s} style={{ width: 22, height: 22, borderRadius: 4, background: "#1e293b", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "#94a3b8" }}>{s}</div>
        ))}
      </div>
    </div>
  ),
};

export default function App() {
  const [layout, setLayout] = useState([]);
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [dragOver, setDragOver] = useState(null);

  const addComponent = (comp) => {
    if (layout.find(c => c.id === comp.id)) return;
    setLayout(prev => [...prev, comp]);
    setSelected(comp.id);
  };

  const removeComponent = (id) => {
    setLayout(prev => prev.filter(c => c.id !== id));
    if (selected === id) setSelected(null);
  };

  const moveUp = (idx) => {
    if (idx === 0) return;
    const next = [...layout];
    [next[idx - 1], next[idx]] = [next[idx], next[idx - 1]];
    setLayout(next);
  };

  const moveDown = (idx) => {
    if (idx === layout.length - 1) return;
    const next = [...layout];
    [next[idx + 1], next[idx]] = [next[idx], next[idx + 1]];
    setLayout(next);
  };

  const isAdded = (id) => layout.some(c => c.id === id);

  return (
    <div style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif", display: "flex", height: "100vh", background: "#f8fafc", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 99px; }
        .comp-card { transition: all 0.15s ease; cursor: pointer; }
        .comp-card:hover { transform: translateY(-1px); }
        .layout-block { transition: all 0.2s ease; position: relative; }
        .action-btn { opacity: 0; transition: opacity 0.15s; }
        .layout-block:hover .action-btn { opacity: 1; }
        .pulse { animation: pulseAnim 2s infinite; }
        @keyframes pulseAnim {
          0%,100% { box-shadow: 0 0 0 0 rgba(99,102,241,0.2); }
          50% { box-shadow: 0 0 0 6px rgba(99,102,241,0); }
        }
        .tag-badge { animation: fadeIn 0.2s ease; }
        @keyframes fadeIn { from { opacity:0; transform:scale(0.9); } to { opacity:1; transform:scale(1); } }
      `}</style>

      {/* LEFT PANEL */}
      <div style={{ width: 260, background: "#fff", borderRight: "1px solid #e2e8f0", display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "20px 18px 14px", borderBottom: "1px solid #f1f5f9" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <div style={{ width: 26, height: 26, borderRadius: 7, background: "linear-gradient(135deg,#6366f1,#8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontSize: 12 }}>⊞</span>
            </div>
            <span style={{ fontWeight: 800, fontSize: 15, color: "#0f172a" }}>Layout Builder</span>
          </div>
          <p style={{ fontSize: 11, color: "#94a3b8", marginTop: 6 }}>Click components to add them to your page layout</p>
        </div>

        <div style={{ padding: "12px 14px", borderBottom: "1px solid #f1f5f9" }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>Components</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {COMPONENTS.map(comp => {
              const added = isAdded(comp.id);
              const isSel = selected === comp.id;
              return (
                <div
                  key={comp.id}
                  className="comp-card"
                  onClick={() => added ? setSelected(comp.id) : addComponent(comp)}
                  style={{
                    display: "flex", alignItems: "center", gap: 10, padding: "8px 10px",
                    borderRadius: 8, border: `1.5px solid ${isSel ? comp.color : added ? "#e2e8f0" : "#f1f5f9"}`,
                    background: isSel ? `${comp.color}10` : added ? "#f8fafc" : "#fff",
                    position: "relative", overflow: "hidden",
                  }}
                >
                  <div style={{ width: 28, height: 28, borderRadius: 7, background: `${comp.color}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: comp.color, fontWeight: 700, flexShrink: 0 }}>
                    {comp.icon}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#0f172a" }}>{comp.label}</div>
                    <div style={{ fontSize: 10, color: "#94a3b8", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{comp.desc}</div>
                  </div>
                  {added && (
                    <div className="tag-badge" style={{ fontSize: 9, fontWeight: 700, color: comp.color, background: `${comp.color}15`, padding: "2px 6px", borderRadius: 99 }}>
                      ✓ Added
                    </div>
                  )}
                  {!added && (
                    <div style={{ fontSize: 14, color: "#cbd5e1" }}>+</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ padding: "12px 14px", marginTop: "auto", borderTop: "1px solid #f1f5f9" }}>
          <div style={{ display: "flex", gap: 6 }}>
            <div style={{ flex: 1, textAlign: "center", padding: "8px 0", background: "#f1f5f9", borderRadius: 7, fontSize: 11, color: "#64748b", fontWeight: 600, cursor: "pointer" }}
              onClick={() => { setLayout([]); setSelected(null); }}>
              Clear All
            </div>
            <div style={{ flex: 1, textAlign: "center", padding: "8px 0", background: "linear-gradient(135deg,#6366f1,#8b5cf6)", borderRadius: 7, fontSize: 11, color: "#fff", fontWeight: 600, cursor: "pointer" }}>
              Export →
            </div>
          </div>
          <div style={{ textAlign: "center", fontSize: 10, color: "#cbd5e1", marginTop: 8 }}>
            {layout.length} component{layout.length !== 1 ? "s" : ""} added
          </div>
        </div>
      </div>

      {/* CENTER - CANVAS */}
      <div style={{ flex: 1, overflow: "auto", display: "flex", flexDirection: "column", alignItems: "center", padding: "32px 24px", gap: 0 }}>
        <div style={{ width: "100%", maxWidth: 780 }}>
          <div style={{ marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#0f172a" }}>Preview Canvas</div>
              <div style={{ fontSize: 11, color: "#94a3b8" }}>Select a component to highlight it</div>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              {["Mobile","Tablet","Desktop"].map((v,i) => (
                <div key={v} style={{ padding: "4px 10px", borderRadius: 5, fontSize: 10, fontWeight: 600, background: i===2?"#0f172a":"#f1f5f9", color: i===2?"#fff":"#64748b", cursor: "pointer" }}>{v}</div>
              ))}
            </div>
          </div>

          {/* Browser Chrome */}
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
            <div style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0", padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ display: "flex", gap: 5 }}>
                {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
              </div>
              <div style={{ flex: 1, background: "#fff", border: "1px solid #e2e8f0", borderRadius: 5, padding: "3px 10px", fontSize: 10, color: "#94a3b8" }}>
                https://yourwebsite.com
              </div>
            </div>

            {/* Layout Area */}
            <div style={{ minHeight: 500, background: "#fafafa" }}>
              {layout.length === 0 ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: 400, gap: 12 }}>
                  <div style={{ fontSize: 40, opacity: 0.3 }}>⊞</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#cbd5e1" }}>Your layout is empty</div>
                  <div style={{ fontSize: 12, color: "#e2e8f0" }}>Click components on the left to add them</div>
                </div>
              ) : (
                layout.map((comp, idx) => {
                  const isSel = selected === comp.id;
                  const isHov = hovered === comp.id;
                  const Content = PREVIEW_CONTENT[comp.id];
                  return (
                    <div
                      key={comp.id}
                      className={`layout-block ${isSel ? "pulse" : ""}`}
                      style={{
                        height: PREVIEW_HEIGHTS[comp.id],
                        position: "relative",
                        border: isSel ? `2px solid ${comp.color}` : isHov ? `2px solid ${comp.color}60` : "2px solid transparent",
                        transition: "border-color 0.2s, box-shadow 0.2s",
                        boxShadow: isSel ? `0 0 0 3px ${comp.color}20` : "none",
                        cursor: "pointer",
                      }}
                      onClick={() => setSelected(isSel ? null : comp.id)}
                      onMouseEnter={() => setHovered(comp.id)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {/* Label Tag */}
                      {(isSel || isHov) && (
                        <div style={{
                          position: "absolute", top: -1, left: -1, zIndex: 10,
                          background: comp.color, color: "#fff",
                          fontSize: 9, fontWeight: 700, padding: "2px 8px",
                          borderRadius: "0 0 5px 0", letterSpacing: "0.05em"
                        }}>
                          {comp.label.toUpperCase()}
                        </div>
                      )}

                      {/* Move / Remove Buttons */}
                      {(isSel || isHov) && (
                        <div className="action-btn" style={{
                          position: "absolute", top: 4, right: 4, zIndex: 10,
                          display: "flex", gap: 3, opacity: 1,
                        }}>
                          <button onClick={e => { e.stopPropagation(); moveUp(idx); }} style={{ width: 22, height: 22, border: "1px solid #e2e8f0", borderRadius: 4, background: "#fff", cursor: "pointer", fontSize: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "#475569" }}>↑</button>
                          <button onClick={e => { e.stopPropagation(); moveDown(idx); }} style={{ width: 22, height: 22, border: "1px solid #e2e8f0", borderRadius: 4, background: "#fff", cursor: "pointer", fontSize: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "#475569" }}>↓</button>
                          <button onClick={e => { e.stopPropagation(); removeComponent(comp.id); }} style={{ width: 22, height: 22, border: "1px solid #fecaca", borderRadius: 4, background: "#fff", cursor: "pointer", fontSize: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "#ef4444" }}>✕</button>
                        </div>
                      )}

                      {/* Preview Content */}
                      <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
                        {Content && <Content />}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL - Properties */}
      <div style={{ width: 220, background: "#fff", borderLeft: "1px solid #e2e8f0", flexShrink: 0 }}>
        <div style={{ padding: "20px 16px 14px", borderBottom: "1px solid #f1f5f9" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#0f172a" }}>Properties</div>
          <div style={{ fontSize: 10, color: "#94a3b8", marginTop: 2 }}>Select a component to inspect</div>
        </div>

        {selected ? (() => {
          const comp = COMPONENTS.find(c => c.id === selected);
          return (
            <div style={{ padding: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: 10, background: `${comp.color}10`, borderRadius: 8, marginBottom: 14 }}>
                <div style={{ width: 30, height: 30, borderRadius: 7, background: `${comp.color}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: comp.color }}>{comp.icon}</div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#0f172a" }}>{comp.label}</div>
                  <div style={{ fontSize: 10, color: "#94a3b8" }}>{comp.desc}</div>
                </div>
              </div>

              {[["Background","#ffffff"],["Padding","24px"],["Text Color","#0f172a"],["Border Radius","8px"],["Max Width","1280px"]].map(([k, v]) => (
                <div key={k} style={{ marginBottom: 10 }}>
                  <div style={{ fontSize: 10, fontWeight: 600, color: "#64748b", marginBottom: 4 }}>{k}</div>
                  <input
                    defaultValue={v}
                    style={{ width: "100%", padding: "5px 8px", border: "1px solid #e2e8f0", borderRadius: 5, fontSize: 11, color: "#0f172a", outline: "none", background: "#f8fafc" }}
                  />
                </div>
              ))}

              <div style={{ marginTop: 14 }}>
                <div style={{ fontSize: 10, fontWeight: 600, color: "#64748b", marginBottom: 6 }}>Visibility</div>
                <div style={{ display: "flex", gap: 4 }}>
                  {[["📱","Mobile"],["💻","Tablet"],["🖥️","Desktop"]].map(([ic, lbl]) => (
                    <div key={lbl} style={{ flex: 1, textAlign: "center", padding: "5px 0", background: "#f1f5f9", borderRadius: 5, fontSize: 9, color: "#475569", cursor: "pointer" }}>
                      <div>{ic}</div>
                      <div style={{ marginTop: 2 }}>{lbl}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: 14 }}>
                <div style={{ fontSize: 10, fontWeight: 600, color: "#64748b", marginBottom: 6 }}>Position in Layout</div>
                <div style={{ padding: "6px 10px", background: "#f8fafc", borderRadius: 6, fontSize: 11, color: "#475569", display: "flex", justifyContent: "space-between" }}>
                  <span>Order</span>
                  <span style={{ fontWeight: 700, color: comp.color }}>{layout.findIndex(c => c.id === selected) + 1} of {layout.length}</span>
                </div>
              </div>

              <button
                onClick={() => removeComponent(selected)}
                style={{ marginTop: 14, width: "100%", padding: "7px 0", border: "1px solid #fecaca", borderRadius: 7, background: "#fff", color: "#ef4444", fontSize: 11, fontWeight: 600, cursor: "pointer" }}
              >
                Remove Component
              </button>
            </div>
          );
        })() : (
          <div style={{ padding: 16 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
              <div style={{ padding: 12, background: "#f8fafc", borderRadius: 8, fontSize: 11, color: "#94a3b8", textAlign: "center", lineHeight: 1.6 }}>
                Click any component in the canvas or sidebar to view its properties
              </div>
              <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: 12 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>Page Settings</div>
                {[["Page Width","1280px"],["Font Family","DM Sans"],["Primary Color","#6366f1"]].map(([k,v]) => (
                  <div key={k} style={{ marginBottom: 8 }}>
                    <div style={{ fontSize: 10, fontWeight: 600, color: "#64748b", marginBottom: 3 }}>{k}</div>
                    <input defaultValue={v} style={{ width: "100%", padding: "5px 8px", border: "1px solid #e2e8f0", borderRadius: 5, fontSize: 11, outline: "none", background: "#f8fafc" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
