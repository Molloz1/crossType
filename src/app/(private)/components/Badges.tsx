import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";



export default function Badges() {
  return (
    <div>
      <Badge variant={"secondary"}>

        <Button variant="link" className="hover:no-underline hover:text-blue-500">
  time
</Button>
      </Badge>
    </div>
  )
}
