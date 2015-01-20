**Writing a post**

 - Posts are present in _posts folder. One file should be present in _posts folder for every post. 
 - Naming convention should be followed. yyyy-mm-dd-{some title text} 
 - File name will appear in the url of the post
 - All images for the site are in /img/ folder
 - For every post, create a folder with yyyy-mm-dd folder in /img/ folder
	 - This is only a convention for better organizing. The same folder name should be referenced in the image links in the post.  
	 - Ex:- `<img src="{{ site.baseurl }}/img/2015-01-18/image002.jpg" alt="Image1">`

**Adding a tag to a post**

 - In a post file, add *tags* section at the top.
 - For every tag added, make sure there is a file in /metapages/tags/{tag name}.md

**Adding an author to a post**

 - In a post file, add *author* section at the top.
 - For every author added, make sure there is a file in /metapages/authors/{author name}.md
 - In the {author name}.md 
	 - provide all social links available, rest of them can be left out
	 - avatar is an image file name for the author - need to be present in /img/ folder

**Building Instructions**

 - Need to install ruby if not present. For windows users - http://rubyinstaller.org/downloads/
 - Also install corresponding devkit from the same page
 - Install jekyll - http://jekyllrb.com/docs/installation/
	 - gem install jekyll
 - *Build:-* jekyll build
 - *Run:-* jekyll serve
 - For editing css, need nodejs
	 - Install less preprocessor - `npm install -g less`
	 - From blog root directory execute following command to generate minified css
		 - `lessc -x ./less/clean-blog.less > ./css/clean-blog.min.css`

**Miscellaneous** 
 - Built static site will sit in /_site/ folder. This folder is not needed for github as github does a build after upload.
 - Check for detailed directory structure - http://jekyllrb.com/docs/structure/
 - _includes - contains html snippet code like header, footer
 - _layouts - contains template code which will be customized based on the site/page variables
 - _posts - all the posts. one file for every post
 - _plugins - this folder will not be considered in github as it wont allow jekyll plugins
 - For testing locally, in a template file add `{{ anyvariable | debug}}` where anyvariable is anything that is valid. Ex:- page


