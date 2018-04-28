export class Post {

    constructor(private title: string, private content: string, private date: Date, private nbLike = 0 ) { }

    public uplike() {
        this.nbLike++;
    }

    public downLike() {
        this.nbLike--;
    }

    public getTitle() {
        return this.title;
    }

}
