(function solve(){
    class Post{
        constructor(title, content){
        this.title = title;
        this.content = content;
        }

        toString(){
            let output = `Post: ${this.title} \n`;
            output += `Content: ${this.content}`;
            return output
        }
    }
    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes){
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComments(comment){
            this.comments.push(comment);
        }

        toString(){
            let output = super.toString() + `\n`;
            output +=`Rating: ${this.likes - this.dislikes}\n`;
            if(this.comments.length > 0){
                output += `Comments: \n`
                this.comments.forEach(element => {
                    output += ` * ${element}\n`;
                });
            }
            return output.trim();
        }
    }

    class BlogPost extends Post{
        constructor(title, content){
            super(title, content);
            this.views = 0;
        }

        view(){
            this.views++;
        }
        toString(){
            let output = super.toString() + `\n`;
            output +=`Views: ${this.views}`;
            return output.trim();
        }


    }

    let news = new Post('news1', 'ala bla', 5, 2)
    console.log(news.toString());

    let socMedia = new SocialMediaPost('news1', 'ala bla')
    socMedia.addComments('sada');
    socMedia.addComments('weqe');
    console.log(socMedia.toString());

    let blog = new BlogPost('blog1', 'text text text');
    blog.view();
    console.log(blog.toString());

    return{
        Post,
        SocialMediaPost,
        BlogPost,
    }
})();