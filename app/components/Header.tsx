"use client";
import React, { useEffect } from "react";
import { Logo } from "./Logo";

export const Header = () => {
  const header = document.getElementById("mainHeader") as HTMLElement;
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    console.log(entries);
    entries.forEach((entry) => {
      console.log(entry);
      const { isIntersecting } = entry;
      if (isIntersecting) {
        const color = entry.target.getAttribute("data-header-color");
        console.log(color);
        header.style.color = color || "black";
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll(".landing-section");

  sections.forEach((section) => observer.observe(section));

  return (
    <header
      id="mainHeader"
      className="py-3 px-10 flex items-center fixed top-0 w-screen justify-between z-40 text-current"
    >
      <Logo />
      <nav>
        <ul className="flex text-sm [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:py-2 [&>li>a]:px-4 [&>li>a]:transition-colors [&>li>a]:duration-300">
          <li>
            <a href="#">Model S</a>
          </li>
          <li>
            <a href="#">Model 3</a>
          </li>
          <li>
            <a href="#">Model X</a>
          </li>
          <li>
            <a href="#">Model Y</a>
          </li>
          <li>
            <a href="#">Powerwall</a>
          </li>
          <li>
            <a href="#">Carga</a>
          </li>
        </ul>
      </nav>
      <nav className="flex flex-grow justify-end basis-0">
        <ul className="flex text-sm [&>li>a]:text-current [&>li>a]:font-medium  [&>li>a]:inline-block [&>li>a]:py-2 [&>li>a]:px-4 [&>li>a]:transition-colors [&>li>a]:duration-300">
          <li>
            <a href="#">Soporte</a>
          </li>
          <li>
            <a href="#">Tienda</a>
          </li>
          <li>
            <a href="#">Cuenta</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
