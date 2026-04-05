// Data Improted into the Javascript //
import { tweetsData } from './data.js'

// Taking Control of ID's //
const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')

// Listening to Event //
tweetBtn.addEventListener('click', function(){
   console.log(tweetInput.value)
})
