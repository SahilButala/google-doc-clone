"use client";

import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const TemplateGallery = () => {
  const isCreating = false;

  // all templates
  const templates = [
    {
      label: "Blank Documents",
      id: "blank",
      imageUrl: "/blank.svg",
    },
    {
      label: "Software Proposal",
      id: "proposal",
      imageUrl: "/software-proposal.svg",
    },
    {
      label: "Cover letter",
      id: "cover-letter",
      imageUrl: "/cover-letter.svg",
    },
    {
      label: "Project Proposal",
      id: "Proposal",
      imageUrl: "/project-proposal.svg",
    },
    {
      label: "Resume",
      id: "resume",
      imageUrl: "/resume.svg",
    },
    {
      label: "Letter",
      id: "letter",
      imageUrl: "/letter.svg",
    },
    {
      label: "Business Letter",
      id: "business-letter",
      imageUrl: "/business-letter.svg",
    },
  ];



  return (
    <div className="bg-[#F1F3F4] ">
      <div className="max-w-screen-xl mx-auto px-16 py-6 flex flex-col gap-y-4">
        <h3 className="text-base font-medium">Start new Document</h3>

        <Carousel>
          <CarouselContent className="-ml-4 ">
            {templates &&
              templates.length > 0 &&
              templates.map((template) => (
                <CarouselItem
                  key={template.id}
                  className="basis-1/2 sm:basis-1/2 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-[14.285714%] pl-4"
                >
                  <div
                    className={cn(
                      "aspect-[3/4] flex flex-col gap-y-2.5",
                      isCreating && "pointer-events-none opacity-50"
                    )}
                  >
                    <button
                      className="size-full hover:border-blue-500 rounded-sm border hover:bg-blue-50 transition flex flex-col items-center justify-center gap-y-4 bg-white"
                      onClick={() => {}}
                      disabled={isCreating}
                      style={{
                        backgroundImage: `url(${template.imageUrl})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></button>
                    <p className="text-sm font-medium truncate">
                      {template.label}
                    </p>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious/>
          <CarouselNext/>
        </Carousel>
      </div>
    </div>
  );
};

export default TemplateGallery;
