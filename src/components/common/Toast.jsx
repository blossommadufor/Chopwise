import { CheckCircle2, AlertCircle, Info } from "lucide-react";
import { useWellness } from "../../context/WellnessContext";

export default function Toast() {
  const { toast } = useWellness();

  if (!toast.show) return null;

  const isSuccess = toast.type === "success";
  const isError = toast.type === "error";

  return (
    <div className="fixed bottom-20 md:bottom-8 right-1/2 translate-x-1/2 md:right-8 md:translate-x-0 z-50 transition-all duration-300 transform scale-100 animate-in fade-in slide-in-from-bottom-5">
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl border text-sm font-semibold backdrop-blur-md ${
          isSuccess
            ? "bg-emerald-950/90 border-emerald-500/40 text-emerald-100"
            : isError
            ? "bg-rose-950/90 border-rose-500/40 text-rose-100"
            : "bg-slate-900/90 border-slate-700 text-slate-100"
        }`}
      >
        {isSuccess && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
        {isError && <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />}
        {!isSuccess && !isError && <Info className="w-5 h-5 text-amber-400 shrink-0" />}
        <span>{toast.message}</span>
      </div>
    </div>
  );
}

