import { Link } from "react-router";

const NotFound = () => {
  return (
    <section
      id="not-found"
      style={{
        minHeight: "100vh",
        backgroundColor: "#F8FAFC",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        fontFamily: "Inter, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative top-left corner */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "200px",
          height: "80px",
          backgroundColor: "#0F1E3D",
          borderBottomRightRadius: "2rem",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: 0,
          width: "120px",
          height: "60px",
          backgroundColor: "#CEAC81",
          borderTopRightRadius: 0,
          borderBottomRightRadius: "1.5rem",
        }}
      />

      {/* Decorative bottom-right corner */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "200px",
          height: "80px",
          backgroundColor: "#0F1E3D",
          borderTopLeftRadius: "2rem",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          right: 0,
          width: "120px",
          height: "60px",
          backgroundColor: "#CEAC81",
          borderTopLeftRadius: "1.5rem",
        }}
      />

      {/* Main content */}
      <div style={{ zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        {/* 404 number */}
        <h1
          style={{
            fontSize: "clamp(6rem, 20vw, 10rem)",
            fontWeight: 800,
            lineHeight: 1,
            background: "linear-gradient(135deg, #1F3A5F 0%, #CEAC81 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontFamily: "Inter, sans-serif",
            margin: 0,
          }}
        >
          404
        </h1>

        <h2
          style={{
            fontSize: "clamp(1.25rem, 4vw, 1.75rem)",
            fontWeight: 700,
            color: "#1F3A5F",
            margin: 0,
          }}
        >
          Page Not Found
        </h2>

        <p
          style={{
            color: "#64748B",
            fontSize: "1rem",
            maxWidth: "400px",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          Looks like this page wandered off. Let's get you back to the hunt.
        </p>

        <Link
          to="/"
          style={{
            marginTop: "1rem",
            display: "inline-block",
            padding: "0.75rem 2.5rem",
            borderRadius: "9999px",
            background: "linear-gradient(135deg, #D8B893, #CEAC81, #BFA06F)",
            color: "#1F3A5F",
            fontWeight: 700,
            fontSize: "1rem",
            textDecoration: "none",
            boxShadow: "0 4px 15px rgba(206,172,129,0.4)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.05)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 20px rgba(206,172,129,0.55)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 15px rgba(206,172,129,0.4)";
          }}
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
