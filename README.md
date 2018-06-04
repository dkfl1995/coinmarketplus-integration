Author: Vlad Vityaz //
Forked from website sources: www.coinmarketplus.com //

                        ###Theme: “How to create mockup from https://www.coinmarketplus.com/ page?”


1. #####Creating local website sources folder:
    * Using Chrome or other popular browser, enter the code inspector tool. (CRTL+SHIFT+C on Chrome Browser).
    * Get in section "Application" inside Chrome Inspector tool (Or other related in-browser tool. Its name can vary, but should contain website sources files (.js, ,.css and others)).
    * Handing core abilities or other addons copy all of sources in your own PC folder, from where you can work with. 
    (Ex.: you can tap with left mouse button on each file in website sources and use "Save as..." property to save that one). 

At this breakpoint you must have already folder on your computer and save website source file inside.

2. #####Made changes on your own inside your local website copy. In this example, we will change titles font-family and containment.
    * First, we must to define inside html file what class is defined at titles element with our handy inspector tool.
    * If there`s defined one, go to main styles file "style.css" and try to find it using CRTL+F and input class name. 
    If not create your own one and go to setup @font-face importing method.
    * Go very up of style.css file and create @font-face with properties font-family (name your new font-family) and url(to font sources it can be local or remote). 
    Both are string type via "".
    * Go to your previous founded or created class and enter inside font-family with your new font-family name.
    * Go into html direct title tag (some tagname) and try to change something between <tag> and </tag>. Everything must work.

3. #####And we will make some more operations at our site. We will paste slick slider before your title element.
    * First we should to define what slider we want to create/use. I`ve been chosen SlickJS by Ken Wheeler.
    * Create HTML structure wherein to use our JQuery slick-sliding script. You can go at his github repo and get provided with any neccessary information about using slickJS into your site.
    * Create script tag at index.html also but at very below before closing part of body tag. Settings for the slider are writing inside object argument in slick() method. Like this:
```javascript
$('//your class selector here\\').slick({//here is your setting in\\})
```
    * Everything should work correctly if you set up slide content good.
    * Notice that you have to adapt content dimensions on your own inside styles if needed, and as it sometimes hard to set correctly you can see at my github repo with my mockup. 
    There is defered style file named own-slick-config.css where every about slick was set up.

4. #####Pull it on GitHub.
    * Thats it we should be ready to pull mockup at your own repository.
    * You need have created GitHub account. And click + at right-top of site, than create a new repository.
    * Follow instructions while creating new repo and than you will face at guide how to push your changes out local repo to git.
    * Init your local repository if didnt do it early. Commit at least one time. Input the commands " git remote add origin /*your-git-repo-url*/ " then " git push -u origin master ".It should make your local repo files be visible at your new git repo.