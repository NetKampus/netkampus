import { Button } from "@workspace/ui/components/button";
import { AlertDialog } from "@workspace/ui/components/alert-dialog";
import { Avatar } from "@workspace/ui/components/avatar";
import { Badge } from "@workspace/ui/components/badge";
import { Card } from "@workspace/ui/components/card";
import { Checkbox } from "@workspace/ui/components/checkbox";
import { Dialog } from "@workspace/ui/components/dialog";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Select } from "@workspace/ui/components/select";
import { Sheet } from "@workspace/ui/components/sheet";
import { Skeleton } from "@workspace/ui/components/skeleton";
import { Toaster } from "@workspace/ui/components/sonner";
import { Switch } from "@workspace/ui/components/switch";
import { Textarea } from "@workspace/ui/components/textarea";
import { ToggleGroup } from "@workspace/ui/components/toggle-group";
import { Toggle } from "@workspace/ui/components/toggle";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4 w-full max-w-2xl p-8">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button size="sm">Button</Button>
        <AlertDialog />
        <Avatar />
        <Badge>Badge</Badge>
        <Card>Card</Card>
        <Checkbox />
        <Dialog />
        <Input placeholder="Input" />
        <Label>Label</Label>
        <Select>
          <option value="">Select</option>
        </Select>
        <Sheet />
        <Skeleton className="w-24 h-6" />
        <Toaster />
        <Switch />
        <Textarea placeholder="Textarea" />
        <ToggleGroup type="single">
          <Toggle value="1">Toggle 1</Toggle>
          <Toggle value="2">Toggle 2</Toggle>
        </ToggleGroup>
        <Toggle>Toggle</Toggle>
      </div>
    </div>
  );
}
