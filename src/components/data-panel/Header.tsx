import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PDFReport } from "@/components/PDFReport";
import { Hotspot } from "@/lib/types";

interface HeaderProps {
  hotspot: Hotspot;
}

export const Header = ({ hotspot }: HeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-3xl font-bold text-white">{hotspot.name}</h2>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="ml-4">
            Generate Report
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl h-[80vh]">
          <PDFReport hotspot={hotspot} />
        </DialogContent>
      </Dialog>
    </div>
  );
};