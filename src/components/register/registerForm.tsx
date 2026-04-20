import { useAuth } from "../../context/AuthContext";
import { Check } from "lucide-react";

const RegisterForm = () => {
  const { user } = useAuth();
  return (
    <>
      {/* USER INFO */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#1F3A5F]">
          Registration Details
        </h2>

        <div className="grid md:grid-cols-2 gap-4 text-gray-600">
          <div><p className="font-medium">Name:</p><p>{user?.name || "Not available"}</p></div>
          <div><p className="font-medium">Email:</p><p>{user?.email || "Not available"}</p></div>
          <div><p className="font-medium">College:</p><p>{user?.college || "Not available"}</p></div>
          <div><p className="font-medium">Course:</p><p>{user?.course || "Not available"}</p></div>
          <div><p className="font-medium">Year:</p><p>{user?.year || "Not available"}</p></div>
          <div><p className="font-medium">Phone:</p><p>{user?.phoneNumber || "Not available"}</p></div>
        </div>
      </div>

      {/* BENEFITS */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#1F3A5F]">
          Benefits of Registration
        </h2>

        <ul className="grid md:grid-cols-2 gap-3 text-gray-600">
          {[
            "Build valuable professional network and connections",
            "Gain real-world exposure and career insights",
            "Direct interaction with recruiters and industry professionals",
            "Opportunity to enhance interview and placement skills",
            "Unlock opportunities aligned with your skills and interests",
            "Resume Reviewer",
          ].map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RegisterForm;