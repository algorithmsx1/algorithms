type Video = { id: string; country: string; category: string; likes: number; shares: number; comments: number; watchTime: number; };
type User = { country: string; likedCategories: string[]; watchHistory: string[]; savedVideos: string[]; };

function recommendVideos(user: User, videos: Video[]): Video[] {
    return videos.map(video => ({ video, score: calculateScore(video, user) }))
                 .sort((a, b) => b.score - a.score)
                 .slice(0, 10) 
                 .map(v => v.video);
}
