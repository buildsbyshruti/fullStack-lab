import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [focusField, setFocusField] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    role: "",
    experience: "0-1 years",
    topics: {
      hooks: true,
      routing: false,
      testing: false,
    },
    goals: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const completion = useMemo(() => {
    const required = [form.fullName, form.email, form.role];
    const filled = required.filter(Boolean).length;
    return Math.round((filled / required.length) * 100);
  }, [form.fullName, form.email, form.role]);

  const selections = useMemo(
    () =>
      Object.entries(form.topics)
        .filter(([, checked]) => checked)
        .map(([key]) => key)
        .join(", ") || "None yet",
    [form.topics],
  );

  const handleInput = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleTopicToggle = (event) => {
    const { name, checked } = event.target;
    setForm((prev) => ({
      ...prev,
      topics: { ...prev.topics, [name]: checked },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    setTimeout(() => {
      setIsSubmitting(false);
      setMessage("Thanks! We saved your preferences.");
    }, 700);
  };

  const getInteractiveInputStyle = (name) => ({
    background: "#ffffff",
    border: focusField === name ? "1px solid #0ea5e9" : "1px solid #d5deeb",
    borderRadius: "12px",
    color: "#0f172a",
    fontSize: "15px",
    padding: "12px 14px",
    outline: "none",
    boxShadow:
      focusField === name
        ? "0 0 0 3px rgba(14,165,233,0.18), 0 6px 18px rgba(15,23,42,0.08)"
        : "0 1px 2px rgba(15, 23, 42, 0.04)",
    transform: focusField === name ? "translateY(-1px)" : "none",
    transition:
      "box-shadow 160ms ease, transform 160ms ease, border-color 160ms ease",
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background:
          "radial-gradient(90% 80% at 12% 18%, rgba(56, 189, 248, 0.25), transparent 52%), radial-gradient(70% 70% at 86% 14%, rgba(94, 234, 212, 0.24), transparent 50%), linear-gradient(180deg, #f7fafc 0%, #f1f5f9 100%)",
        display: "grid",
        placeItems: "center",
        padding: "54px 20px",
        fontFamily: "'Poppins', 'Manrope', 'Segoe UI', sans-serif",
        color: "#0f172a",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e2e8f0",
          borderRadius: "18px",
          boxShadow: "0 26px 80px rgba(15, 23, 42, 0.12)",
          color: "#0f172a",
          display: "grid",
          gap: "24px",
          padding: "36px",
          width: "min(960px, 94vw)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "-40% auto auto -20%",
            width: "320px",
            height: "320px",
            background:
              "radial-gradient(closest-side, rgba(34,211,238,0.16), transparent)",
            filter: "blur(6px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "auto -30% -40% auto",
            width: "360px",
            height: "360px",
            background:
              "radial-gradient(closest-side, rgba(59,130,246,0.14), transparent)",
            filter: "blur(10px)",
            pointerEvents: "none",
          }}
        />
        <header
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            paddingBottom: "6px",
            borderBottom: "1px dashed #e2e8f0",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #3b82f6, #22d3ee)",
              display: "grid",
              placeItems: "center",
              fontWeight: 700,
              letterSpacing: "0.8px",
              color: "#0b1224",
              boxShadow: "0 12px 32px rgba(34, 211, 238, 0.3)",
            }}
          >
            F6
          </div>
          <div>
            <div
              style={{
                fontSize: "15px",
                opacity: 0.68,
                letterSpacing: "0.3px",
              }}
            >
              Experiment 6 · Controlled Components
            </div>
            <h1
              style={{
                margin: "4px 0 2px",
                fontSize: "28px",
                letterSpacing: "0.4px",
                lineHeight: 1.2,
              }}
            >
              Frontend Intake Form
            </h1>
            <div style={{ fontSize: "15px", opacity: 0.72, lineHeight: 1.5 }}>
              Every input below is fully controlled by React state.
            </div>
          </div>
          <div
            style={{
              marginLeft: "auto",
              padding: "10px 14px",
              background: "linear-gradient(135deg, #e0f2fe, #cffafe)",
              borderRadius: "12px",
              border: "1px solid #bfdbfe",
              boxShadow: "0 6px 18px rgba(59,130,246,0.18)",
              display: "grid",
              gap: "4px",
              minWidth: "160px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "13px",
                color: "#0f172a",
                opacity: 0.8,
              }}
            >
              Progress
              <span style={{ fontWeight: 700 }}>{completion}%</span>
            </div>
            <div
              style={{
                height: "8px",
                borderRadius: "999px",
                background: "#e2e8f0",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${completion}%`,
                  height: "100%",
                  background: "linear-gradient(135deg, #0ea5e9, #22d3ee)",
                  transition: "width 220ms ease",
                }}
              />
            </div>
          </div>
        </header>

        <form
          onSubmit={handleSubmit}
          style={{ display: "grid", gap: "20px", paddingTop: "6px" }}
        >
          <div
            style={{
              display: "grid",
              gap: "14px",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            }}
          >
            <label
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                fontWeight: 600,
                letterSpacing: "0.2px",
                color: "#0f172a",
              }}
            >
              Full name
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleInput}
                style={getInteractiveInputStyle("fullName")}
                placeholder="Your name"
                onFocus={() => setFocusField("fullName")}
                onBlur={() => setFocusField("")}
                required
              />
            </label>

            <label
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                fontWeight: 600,
                letterSpacing: "0.2px",
                color: "#0f172a",
              }}
            >
              Email
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleInput}
                style={getInteractiveInputStyle("email")}
                placeholder="you@example.com"
                onFocus={() => setFocusField("email")}
                onBlur={() => setFocusField("")}
                required
              />
            </label>
          </div>

          <div
            style={{
              display: "grid",
              gap: "14px",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            }}
          >
            <label
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                fontWeight: 600,
                letterSpacing: "0.2px",
                color: "#0f172a",
              }}
            >
              Role
              <select
                name="role"
                value={form.role}
                onChange={handleInput}
                style={{
                  ...getInteractiveInputStyle("role"),
                  appearance: "none",
                }}
                onFocus={() => setFocusField("role")}
                onBlur={() => setFocusField("")}
                required
              >
                <option value="" disabled>
                  Choose one
                </option>
                <option value="student">Student</option>
                <option value="engineer">Frontend Engineer</option>
                <option value="designer">Designer</option>
                <option value="manager">Product / Manager</option>
              </select>
            </label>

            <label
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                fontWeight: 600,
                letterSpacing: "0.2px",
                color: "#0f172a",
              }}
            >
              Experience
              <select
                name="experience"
                value={form.experience}
                onChange={handleInput}
                style={{
                  ...getInteractiveInputStyle("experience"),
                  appearance: "none",
                }}
                onFocus={() => setFocusField("experience")}
                onBlur={() => setFocusField("")}
              >
                <option value="0-1 years">0-1 years</option>
                <option value="2-4 years">2-4 years</option>
                <option value="5-8 years">5-8 years</option>
                <option value="9+ years">9+ years</option>
              </select>
            </label>
          </div>

          <fieldset
            style={{
              border: "1px solid #d5deeb",
              borderRadius: "12px",
              padding: "12px 14px 8px",
              display: "grid",
              gap: "12px",
              background: "linear-gradient(180deg, #f8fbff 0%, #eef5ff 100%)",
            }}
          >
            <legend style={{ padding: "0 6px", opacity: 0.85 }}>
              Topics to focus on
            </legend>
            <div style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
              {[
                { key: "hooks", label: "Hooks" },
                { key: "routing", label: "Routing" },
                { key: "testing", label: "Testing" },
              ].map((topic) => (
                <label
                  key={topic.key}
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    name={topic.key}
                    checked={form.topics[topic.key]}
                    onChange={handleTopicToggle}
                    style={{ width: 16, height: 16 }}
                  />
                  <span>{topic.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              fontWeight: 600,
              letterSpacing: "0.2px",
              color: "#0f172a",
            }}
          >
            Goals for this workshop
            <textarea
              name="goals"
              value={form.goals}
              onChange={handleInput}
              style={{
                ...getInteractiveInputStyle("goals"),
                minHeight: "120px",
                resize: "vertical",
              }}
              onFocus={() => setFocusField("goals")}
              onBlur={() => setFocusField("")}
              placeholder="Tell us what you want to build, learn, or unblock."
            />
          </label>

          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <div style={{ fontSize: "14px", opacity: 0.7 }}>
              Live preview updates with each keystroke (controlled inputs!).
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                background: "linear-gradient(135deg, #0ea5e9, #22d3ee)",
                border: "none",
                borderRadius: "12px",
                color: "#0b1224",
                cursor: "pointer",
                fontWeight: 700,
                letterSpacing: "0.3px",
                padding: "12px 20px",
                minWidth: "160px",
                boxShadow: "0 12px 30px rgba(14,165,233,0.28)",
                opacity: isSubmitting ? 0.7 : 1,
                transition: "transform 160ms ease, box-shadow 160ms ease",
                transform: isSubmitting ? "translateY(1px)" : "translateY(0)",
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.boxShadow =
                  "0 14px 34px rgba(14,165,233,0.32)";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.boxShadow =
                  "0 12px 30px rgba(14,165,233,0.28)";
              }}
            >
              {isSubmitting ? "Saving..." : "Save preferences"}
            </button>
          </div>
        </form>

        <section
          style={{
            borderTop: "1px solid #e2e8f0",
            paddingTop: "12px",
            display: "grid",
            gap: "10px",
            background:
              "linear-gradient(180deg, rgba(226,232,240,0.6), rgba(248,250,252,0.9))",
            borderRadius: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <h2 style={{ margin: 0, fontSize: "18px" }}>Live preview</h2>
            {message && (
              <span style={{ color: "#0f9b74", fontWeight: 700 }}>
                {message}
              </span>
            )}
          </div>
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #d5deeb",
              borderRadius: "12px",
              padding: "14px 16px",
              display: "grid",
              gap: "8px",
              fontFamily: "'SFMono-Regular', Menlo, Consolas, monospace",
              fontSize: "14px",
            }}
          >
            <div>
              <strong>Name:</strong> {form.fullName || "—"}
            </div>
            <div>
              <strong>Email:</strong> {form.email || "—"}
            </div>
            <div>
              <strong>Role:</strong> {form.role || "—"}
            </div>
            <div>
              <strong>Experience:</strong> {form.experience}
            </div>
            <div>
              <strong>Topics:</strong> {selections}
            </div>
            <div>
              <strong>Goals:</strong> {form.goals || "—"}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
