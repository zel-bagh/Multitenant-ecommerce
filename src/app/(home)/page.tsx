import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";


export default function home() {
  return (
      <div className="flex flex-col gap-y-4 ">
        <div>
        <Button variant="elevated">
          Bismi Lah
        </Button>
        </div>
        <div>
          <Progress value={50} />
        </div>
        <div>
          <Input placeholder="Enter your name" />
        </div>
        <div>
          <Textarea placeholder="Enter your message" />
        </div>
        <div>
          <Checkbox/>
        </div>
      </div>
  );
}