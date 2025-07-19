"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearchParsms } from "@/hooks/use-search-params";
import { SearchIcon, XIcon } from "lucide-react";
import React, { useRef, useState } from "react";

const Search_Input = () => {
  const [value, setvalue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useSearchParsms("search");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setvalue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(value);
    inputRef?.current?.blur();
  };

  const handleClear = () => {
    setvalue(""), inputRef?.current?.blur();
    setSearch("");
  };
  return (
    <div className="flex flex-1 items-center justify-center">
      <form className="relative max-w-[720px] w-full" onSubmit={handleSubmit}>
        <Input
          value={value}
          onChange={handleChange}
          ref={inputRef}
          placeholder="Search here"
          className="md:text-base placeholder:text-neutral-800 px-14 border-none w-full focus-visible:shadow-[0_1px_1px_0_rgba(65,69,73 , .3),0_1px_3px_1px_rgba(65,69,73,.15) bg-[#F0F4F8]  rounded-full focus-visible:ring-0 focus:bg-white"
        />
        <Button
          type="submit"
          variant={"ghost"}
          size={"icon"}
          className="absolute left-3 top-1/2 -translate-y-1/2  [&_svg]:size-5 rounded-full"
        >
          <SearchIcon />
        </Button>

        {value && (
          <Button
            type="button"
            variant={"ghost"}
            size={"icon"}
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2  [&_svg]:size-5 rounded-full"
          >
            <XIcon />
          </Button>
        )}
      </form>
    </div>
  );
};

export default Search_Input;
