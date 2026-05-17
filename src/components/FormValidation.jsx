import { Check, X, AlertCircle } from "lucide-react";

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateName = (name) => {
  return name.trim().length >= 2;
};

export const validateMessage = (message) => {
  return message.trim().length >= 10;
};

export const FormInput = ({
  label,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  success,
  placeholder,
  required = false,
  maxLength,
  showCount = false,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label}
        {required && <span className="text-primary ml-1">*</span>}
      </label>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          maxLength={maxLength}
          required={required}
          className={`w-full px-4 py-3 bg-surface rounded-xl border outline-none transition-all ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
              : success
              ? "border-green-500 focus:border-green-500 focus:ring-1 focus:ring-green-500"
              : "border-border focus:border-primary focus:ring-1 focus:ring-primary"
          }`}
        />
        
        {/* Validation icon */}
        {(error || success) && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {error ? (
              <X className="w-5 h-5 text-red-500" />
            ) : (
              <Check className="w-5 h-5 text-green-500" />
            )}
          </div>
        )}
      </div>
      
      {/* Character count */}
      {showCount && maxLength && (
        <div className="flex justify-end mt-1">
          <span className={`text-xs ${
            value.length > maxLength * 0.9 ? "text-primary" : "text-muted-foreground"
          }`}>
            {value.length} / {maxLength}
          </span>
        </div>
      )}
      
      {/* Error message */}
      {error && (
        <div className="flex items-center gap-2 mt-2 text-sm text-red-400">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}
      
      {/* Success message */}
      {success && !error && (
        <div className="flex items-center gap-2 mt-2 text-sm text-green-400">
          <Check className="w-4 h-4 flex-shrink-0" />
          <span>Looks good!</span>
        </div>
      )}
    </div>
  );
};

export const FormTextarea = ({
  label,
  value,
  onChange,
  onBlur,
  error,
  success,
  placeholder,
  required = false,
  maxLength,
  rows = 5,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label}
        {required && <span className="text-primary ml-1">*</span>}
      </label>
      <div className="relative">
        <textarea
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          maxLength={maxLength}
          required={required}
          rows={rows}
          className={`w-full px-4 py-3 bg-surface rounded-xl border outline-none transition-all resize-none ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
              : success
              ? "border-green-500 focus:border-green-500 focus:ring-1 focus:ring-green-500"
              : "border-border focus:border-primary focus:ring-1 focus:ring-primary"
          }`}
        />
      </div>
      
      {/* Character count */}
      {maxLength && (
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs text-muted-foreground">
            Minimum 10 characters
          </span>
          <span className={`text-xs ${
            value.length > maxLength * 0.9 ? "text-primary" : "text-muted-foreground"
          }`}>
            {value.length} / {maxLength}
          </span>
        </div>
      )}
      
      {/* Error message */}
      {error && (
        <div className="flex items-center gap-2 mt-2 text-sm text-red-400">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}
      
      {/* Success message */}
      {success && !error && (
        <div className="flex items-center gap-2 mt-2 text-sm text-green-400">
          <Check className="w-4 h-4 flex-shrink-0" />
          <span>Looks good!</span>
        </div>
      )}
    </div>
  );
};
