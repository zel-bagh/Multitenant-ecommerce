import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (<>
    <Button>Bismi Lah</Button>
    <p className="text-rose-500">Alhamduli Lah</p>
    <Input placeholder="Enter your name" />
    <Textarea placeholder="Enter your message" />
    <Checkbox/>
    <Progress value={50} className="w-full" />
    </>
  );
}
