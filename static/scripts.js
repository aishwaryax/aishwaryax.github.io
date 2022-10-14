let aboutLink, aboutContainer, industryLink, experienceContainer, educationLink, educationContainer, projectsLink, projectsContainer, skillsLink, skillsContainer
function setSelectors()
{
    aboutLink = $(".js-link-about")
    industryLink = $(".js-link-industry")
    educationLink = $(".js-link-education")
    projectsLink = $(".js-link-projects")
    skillsLink = $(".js-link-skills")
    aboutContainer = $(".js-about")
    experienceContainer = $(".js-experience")
    educationContainer = $(".js-education")
    projectsContainer = $(".js-projects")
    skillsContainer = $(".js-skills")
}

$(document).ready(function(){
  setSelectors();
  aboutLink.click(function(){
    aboutLink.addClass("link--active")
    industryLink.removeClass("link--active")
    educationLink.removeClass("link--active")
    projectsLink.removeClass("link--active")
    skillsLink.removeClass("link--active")
    aboutContainer.show();
    experienceContainer.hide();
    educationContainer.hide();
    projectsContainer.hide();
    skillsContainer.hide();
  });

  industryLink.click(function(){
    aboutLink.removeClass("link--active")
    industryLink.addClass("link--active")
    educationLink.removeClass("link--active")
    projectsLink.removeClass("link--active")
    skillsLink.removeClass("link--active")
    aboutContainer.hide();
    experienceContainer.show();
    educationContainer.hide();
    projectsContainer.hide();
    skillsContainer.hide();
  });

  educationLink.click(function(){
    aboutLink.removeClass("link--active")
    industryLink.removeClass("link--active")
    educationLink.addClass("link--active")
    projectsLink.removeClass("link--active")
    skillsLink.removeClass("link--active")
    aboutContainer.hide();
    experienceContainer.hide();
    educationContainer.show();
    projectsContainer.hide();
    skillsContainer.hide();
  });

  projectsLink.click(function(){
    aboutLink.removeClass("link--active")
    industryLink.removeClass("link--active")
    educationLink.removeClass("link--active")
    projectsLink.addClass("link--active")
    skillsLink.removeClass("link--active")
    aboutContainer.hide();
    experienceContainer.hide();
    educationContainer.hide();
    projectsContainer.show();
    skillsContainer.hide();
  });

  skillsLink.click(function(){
    aboutLink.removeClass("link--active")
    industryLink.removeClass("link--active")
    educationLink.removeClass("link--active")
    projectsLink.removeClass("link--active")
    skillsLink.addClass("link--active")
    aboutContainer.hide();
    experienceContainer.hide();
    educationContainer.hide();
    projectsContainer.hide();
    skillsContainer.show();
  });
});
