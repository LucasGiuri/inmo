import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  IconMagnifyingGlass,
  SearchInput,
} from "./searchBox.styles";

const SearchBox = () => {
  const targetRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const showSearchInput = isHovered || isFocused;

  useEffect(() => {
    targetRef.current.value = "";
  }, [showSearchInput]);

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      hover={showSearchInput}
    >
      <SearchInput ref={targetRef} showSearchInput={showSearchInput} />
      <IconMagnifyingGlass />
    </Container>
  );
};

export default SearchBox;
