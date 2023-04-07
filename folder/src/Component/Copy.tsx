import React from "react";
import { Button } from "baseui/button";

interface CopyProps {
  password: string;
  copied: boolean;
  setCopied: (copied: boolean) => void;
}

const Copy: React.FC<CopyProps> = ({ password, setCopied, copied }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
  };

  return (
    <Button
      onClick={handleCopy}
      overrides={{
        BaseButton: {
          style: {
            backgroundColor: "black",
            width: "100%",
            marginBottom: "10px",
            ":hover": {
              backgroundColor: "green",
            },
          },
        },
      }}
      disabled={password === ""}
    >
      {copied ? "COPIED" : "COPY"}
    </Button>
  );
};

export default Copy;
