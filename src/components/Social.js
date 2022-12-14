function SocialItem(props) {
    return <a className="flex items-center hover:bg-blue-600 px-4 py-2 rounded" href={props.href}>
        <img className="w-8 mr-2" src={props.image} alt=""/>
        <div className="font-bold">{props.name}</div>
    </a>
}

function Social() {
    return<div className="bg-gray-900 p-16">
    <div className="flex flex-col items-center">
        <div className="title">
            Join the Community!
        </div>
        <div className="flex flex-col md:flex-row gap-16">
            <SocialItem image="github.svg" name="GitHub" href="https://github.com/AbyOS-Team"/>
            <SocialItem image="discord.svg" name="Discord" href="https://www.discord.gg/kqCT4Vkz6H"/>
            <SocialItem image="reddit.svg" name="Reddit" href="https://www.reddit.com/r/AbyOS"/>
            <SocialItem image="twitter.svg" name="Twitter" href="https://twitter.com/search?q=%23AbyOS"/>
        </div>
    </div>
    </div>
}

export default Social;
