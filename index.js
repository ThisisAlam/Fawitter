// Data Improted into the Javascript //
// import { tweetsData } from './data.js'

// Data //
const tweetsData = [   
    {
        handle: `@TrollBot66756542 💎`,
        profilePic: `images/troll.jpg`,
        likes: 27,
        retweets: 10,
        tweetText: `Buy Bitcoin, ETH Make 💰💰💰 low low prices. 
            Guaranteed return on investment. HMU DMs open!!`,
        replies: [],
        isLiked: false,
        isRetweeted: false,
        uuid: '4b161eee-c0f5-4545-9c4b-8562944223ee',
    },    
    {
        handle: `@Elon ✅`,
        profilePic: `images/musk.png`,
        likes: 6500,
        retweets: 234,
        tweetText: `I need volunteers for a one-way mission to Mars 🪐. No experience necessary🚀`,
        replies: [
                  {
                handle: `@TomCruise ✅`,
                profilePic: `images/tcruise.png`,
                tweetText: `Yes! Sign me up! 😎🛩`,
            },
                  {
                handle: `@ChuckNorris ✅`,
                profilePic: `images/chucknorris.jpeg`,
                tweetText: `I went last year😴`,
            },
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: '3c23454ee-c0f5-9g9g-9c4b-77835tgs2',
    },
        {
        handle: `@NoobCoder12`,
        profilePic: `images/flower.png`,
        likes: 10,
        retweets: 3,
        tweetText: `Are you a coder if you only know HTML?`,
        replies: [
            {
                handle: `@StackOverflower ☣️`,
                profilePic: `images/overflow.png`,
                tweetText: `No. Onviosuly not. Go get a job in McDonald's.`,
            },
            {
                handle: `@YummyCoder64`,
                profilePic: `images/love.png`,
                tweetText: `You are wonderful just as you are! ❤️`,
            },
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: '8hy671sff-c0f5-4545-9c4b-1237gyys45',
    },     
]

// Taking Control of ID's //
const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')

// Listening to Event //
tweetBtn.addEventListener('click', function(){
   console.log(tweetInput.value)
})



// Filtering tweetObjReplies //
const tweetObjReplies = tweetsData.filter(function(tweet){
   return tweet.replies
})[0]

// Event Listener // 
// Run count for like and retweet //  
// Open Comment //
const commentBtn = document.getElementById("comment-btn")
const likeBtn = document.getElementById("like-btn")
const retweetBtn = document.getElementById("retweet-btn")

// Function handleLikeClick() filtering tweetTargetObj for Likes //
function handleLikeClick(tweetId) {
   const tweetTargetObj = tweetsData.filter(function(tweet){
      return tweet.uuid.includes(tweetId)
   })[0]
   if (!tweetTargetObj.isLiked){
      tweetTargetObj.likes++
   } else { tweetTargetObj.likes-- }
      tweetTargetObj.isLiked = !tweetTargetObj.isLiked
      render()
}
// Function handleRetweetClick() filtering tweetTargetObj for Retweets //
function handleRetweetClick(tweetId) {
   const tweetTargetObj = tweetsData.filter(function(tweet){
      return tweet.uuid.includes(tweetId)
   })[0]
   if (!tweetTargetObj.isRetweeted){
      tweetTargetObj.retweets++
   } else { tweetTargetObj.retweets-- }
      tweetTargetObj.isRetweeted = !tweetTargetObj.isRetweeted
      render()
}

document.addEventListener('click', function(e){
   console.log('like', e.target.dataset.like)
   console.log('retweet', e.target.dataset.retweet)
   console.log('reply', e.target.dataset.reply)

   // Like funtion //
   if (e.target.dataset.like){
         handleLikeClick(e.target.dataset.like)
   }

   // Retweet funtion //
   if (e.target.dataset.retweet){
         handleRetweetClick(e.target.dataset.retweet)
   }

   // comment funtion //
   if (e.target.document.getElementById("comment-btn")){
      if (!tweetObj.replies.length > 0) {
         e.target.id.parentElement.style.display = 'none'
      } else {
         e.target.id.parentElement.style.display = 'flex'
      }
   }

})

// Only 1 FeedHTML //
const feed = document.getElementById('feed')
function getFeedHTML() {
   let feedHTML = ''
   tweetsData.forEach(function(tweets){
      feedHTML += 
         `<div class="tweet">
            <div class="tweet-inner">
               <img src=${tweets.profilePic} class="profile-pic">
               <div>
                     <p class="handle">${tweets.handle}</p>
                     <p class="tweet-text">${tweets.tweetText}</p>
                     <div class="tweet-details">
                        <i class="fa-regular fa-comment-dots" data-reply="${tweets.uuid}" id="comment-btn"></i>
                        <span class="tweet-detail">
                           ${tweets.replies.length}
                        </span>
                        <i class="fa-solid fa-heart" data-like="${tweets.uuid}" id="like-btn"></i>
                        <span class="tweet-detail">
                           ${tweets.likes}
                        </span>
                        <i class="fa-solid fa-retweet" data-retweet="${tweets.uuid}" id="retweet-btn"></i>
                        <span class="tweet-detail">
                           ${tweets.retweets}
                        </span>
                     </div>   
               </div>            
            </div>
         </div>`
   })
   return feedHTML
}

// Function render() //
function render(){
   feed.innerHTML = getFeedHTML()
}

// Calling function render () //
render()

