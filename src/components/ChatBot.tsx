
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, X, Send } from "lucide-react";

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello! I'm CIA Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const faqResponses = {
    "admission": "For admissions, please contact us via WhatsApp or visit our CIA Official page for application forms.",
    "fees": "Please visit our CIA Official page for detailed fee structure information.",
    "facilities": "We offer AC classrooms, smart classes, swimming pool, sports facilities, and much more!",
    "location": "We are located in Rampur Maniharan. You can find detailed directions on our contact page.",
    "curriculum": "We follow an international standard curriculum with STEM learning and practical approach."
  };

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { type: "user", text: input }]);
    
    const lowerInput = input.toLowerCase();
    let response = "Thank you for your question! For detailed information, please contact us via WhatsApp or visit our official pages.";
    
    Object.keys(faqResponses).forEach(key => {
      if (lowerInput.includes(key)) {
        response = faqResponses[key as keyof typeof faqResponses];
      }
    });

    setTimeout(() => {
      setMessages(prev => [...prev, { type: "bot", text: response }]);
    }, 500);

    setInput("");
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 shadow-lg"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-white rounded-lg shadow-xl border">
          <div className="flex items-center justify-between p-4 border-b bg-blue-600 text-white rounded-t-lg">
            <h3 className="font-semibold">CIA Assistant</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-blue-700"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 p-4 h-72 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-3 ${message.type === "user" ? "text-right" : "text-left"}`}
              >
                <div
                  className={`inline-block p-2 rounded-lg max-w-xs ${
                    message.type === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button onClick={handleSend} size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
