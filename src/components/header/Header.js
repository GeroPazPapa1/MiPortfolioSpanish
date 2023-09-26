import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection
} from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Habilidades</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Experiencias de trabajo</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#projects">Proyectos</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Certificados</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Fotos artisticas</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">Deportes</a>
            </li>
          )}
          <li>
            <a href="#contact">Contactar</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;