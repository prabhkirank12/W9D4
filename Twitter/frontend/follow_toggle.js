class FollowToggle {

    constructor(el) {
        this.$el = $(el);
        this.userId = $(el).data('user-id');
        this.followState = $(el).data('initial-follow-state');
        this.render();
        this.$el.on('click', (e) => { this.handleClick(e)})
    }

    render() {
        if (this.followState === "unfollowed") {
            // debugger;
            this.$el.html('Follow');
        } else if (this.followState === "followed") {
            // debugger;
            this.$el.html('Unfollow');
        }
    }

    handleClick(e) {
        e.preventDefault();

        if (this.followState === "unfollowed"){ 
            return $.ajax ({
                method: "POST",
                url: `/users/${this.userId}/follow`,
                dataType: 'json',
                success: response => {
                    this.followState = "followed"
                    this.render()

                }
            })
        } else{
            return $.ajax ({
                method: "DELETE",
                url: `/users/${this.userId}/follow`,
                dataType: 'json',
                success: response => {
                    this.followState = "unfollowed"
                    this.render()
                }
            })
        }
    }
    
};

module.exports = FollowToggle;