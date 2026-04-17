import { useState } from "react";
import axios from "axios";
// navigate to company selection 
const UploadResume = () => {

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleResumeUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    if (selected.type !== "application/pdf") {
      setStatus("error");
      setError("Only PDF allowed");
      return;
    }

    if (selected.size > 5 * 1024 * 1024) {
      setStatus("error");
      setError("File must be less than 5MB");
      return;
    }

    setFile(selected);
    setStatus("uploading");

    try {
      const formData = new FormData();
      formData.append("resume", selected);

      const res = await axios.patch(
        `${backendURL}/api/internHunt/uploadResume`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" }
        }
      );

      if (res.data.success) {
        setStatus("success");
        localStorage.setItem("hasUploadedResume", "true");

        if (res.data.data?.file?.fileUrl) {
          localStorage.setItem("resumeUrl", res.data.data.file.fileUrl);
        }
      } else {
        throw new Error();
      }

    } catch (err) {
      setStatus("error");
      setError("Upload failed");
    }
  };

  const resumeUrl = localStorage.getItem("resumeUrl");

  return (
    <>
      <section id="upload-resume">
        <div className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-20 gap-14 bg-linear-to-br from-[#a9a7a7] via-[#F8FAFC] to-[#EEF2F7]">

          <div className="w-full max-w-2xl p-8 flex flex-col gap-6 border border-[#CEAC81]/20 rounded-3xl bg-white shadow-xl">

            {/* TITLE */}
            <h1 className="text-3xl font-bold text-center text-[#1F3A5F]">
              Upload Your Resume
            </h1>

            <p className="text-center text-gray-500 text-sm">
              Upload your resume (PDF only, max 5MB) to continue
            </p>

            {/* STATUS */}
            {status === "success" && (
              <div className="bg-[#1F3A5F]/5 px-5 py-4 rounded-xl border border-[#1F3A5F]/20 flex items-center gap-3">
                <span className="text-[#1F3A5F] text-lg">✓</span>
                <p className="text-[#1F3A5F] text-sm font-semibold">
                  Resume Uploaded Successfully
                </p>
              </div>
            )}

            {status === "error" && (
              <div className="bg-[#CEAC81]/10 px-5 py-4 rounded-xl border border-[#CEAC81]/30 flex items-center gap-3">
                <span className="text-[#CEAC81] text-lg">⚠</span>
                <p className="text-[#1F3A5F] text-sm">{error}</p>
              </div>
            )}

            {status === "uploading" && (
              <div className="bg-[#1F3A5F]/5 px-5 py-4 rounded-xl border border-[#1F3A5F]/20 flex items-center gap-3">
                <span className="text-[#1F3A5F] text-lg">⏳</span>
                <p className="text-[#1F3A5F] text-sm">Uploading...</p>
              </div>
            )}

            {/* BUTTONS */}
            <div className="flex gap-4">

              <input
                type="file"
                accept=".pdf"
                id="resumeUpload"
                className="hidden"
                onChange={handleResumeUpload}
              />

              <label
                htmlFor="resumeUpload"
                className="flex-1 text-[#1F3A5F] font-semibold py-3 rounded-xl 
                bg-linear-to-r from-[#D8B893] via-[#CEAC81] to-[#BFA06F]
                hover:scale-[0.97] transition-all duration-200 shadow-md cursor-pointer text-center"
              >
                Upload Resume
              </label>

              <button
                onClick={() => {
                  if (resumeUrl) window.open(resumeUrl, "_blank");
                }}
                className="flex-1 border border-[#CEAC81]/40 py-3 rounded-xl 
                hover:bg-[#CEAC81] hover:text-[#1F3A5F] text-[#1F3A5F]
                transition-all duration-200 text-sm font-medium"
              >
                View Resume
              </button>

            </div>

            {/* FILE NAME */}
            {file && (
              <p className="text-xs text-gray-500 text-center">{file.name}</p>
            )}

          </div>

          {/* APPLY BUTTON */}
          <div className="px-6 py-2 rounded-full font-medium text-[#1F3A5F] text-2xl
            bg-linear-to-r from-[#D8B893] via-[#CEAC81] to-[#BFA06F]
            shadow-md hover:shadow-lg hover:scale-105
            transition-all duration-300 cursor-pointer">
            Apply for Companies
          </div>

        </div>
      </section>
    </>
  );
};

export default UploadResume;