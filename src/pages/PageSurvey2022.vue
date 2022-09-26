<template>
    <LayoutBase>
        <h1>Results - 2022 September</h1>
        <br />
        <h2>What genre of multiplayer game are you developing?</h2>
        <BarChart :chart-data="genreData"></BarChart>
        <br />
        <h2>What client platform do you target?</h2>
        <BarChart :chart-data="clientTargetData"></BarChart>
        <br />
        <h2>Which client library do you use?</h2>
        <BarChart :chart-data="clientLibraryData"></BarChart>
        <br />
        <h2>On what level would you put yourself?</h2>
        <DoughnutChart :chartData="levelData"></DoughnutChart>
        <br />
        <h2>How did you first find out about Colyseus?</h2>
        <DoughnutChart :chartData="findData"></DoughnutChart>
        <br />
        <h2>What tutorial would you wish?</h2>
        <ul class="flex flex-col gap-1">
            <li class="wish p-2" v-for="wish of wishesData">&#8226; {{wish}}</li>
        </ul>
    </LayoutBase>
</template>
<script lang="ts" setup>
import LayoutBase from '../layouts/LayoutBase.vue';
import BarChart from '../components/BarChart.vue';
import DoughnutChart from '../components/DoughnutChart.vue';

const genreData = {
    labels: [
        'Shooter',
        'MOBA',
        'Platformer',
        'RPG',
        'Puzzlers and Party Game',
        'Turn-based Game',
        'Sandbox',
        'Other'
    ],
    datasets: [
        {
            label: '2022 Sept.',
            backgroundColor: '#4c81ff',
            data: [19, 17, 11, 33, 25, 38, 12, 8]
        }
    ]
}

const clientTargetData = {
    labels: [
        'Web',
        'Windows',
        'OSX (Mac)',
        'Linux',
        'IOS (iPhone)',
        'Android',
        'Consoles',
        'Other'
    ],
    datasets: [
        {
            label: '2022 Sept.',
            backgroundColor: '#4c81ff',
            data: [62, 36, 16, 15, 29, 38, 2, 3]
        }
    ]
}

const clientLibraryData = {
    labels: [
        'JavaScript (colyseus.js)',
        'Unity',
        'Defold Engine',
        'Haxe',
        'Cocos Creator',
        'Construct3',
        'Godot',
        'Other'
    ],
    datasets: [
        {
            label: '2022 Sept.',
            backgroundColor: '#4c81ff',
            data: [53, 29, 8, 5, 7, 4, 4, 6]
        }
    ]
}


const levelData = {
    labels: ['Beginner', 'Junior Dev', 'Mid Dev', 'Senior Dev'],
    datasets: [
        {
            backgroundColor: ['blue', 'green', 'orange', 'red'],
            data: [12, 13, 27, 29]
        }
    ]
}

const findData = {
    labels: ['Google Search', 'Recommendation from a friend', 'Youtube Video', 'Blog Post', 'Other'],
    datasets: [
        {
            backgroundColor: ['orange', 'green', 'blue', 'red', 'gray'],
            data: [57, 11, 3, 2, 8]
        }
    ]
}

const wishesData = [
    'Make 3D shooter game tutorial please',
    'a follow-along tutorial for client side unity and server side haxe',
    'For multiplayer game and puzzle games',
    'How colyseus can help in building real time games by the combination of schema states and react states!',
    'Tutorial for someone who is new to whole multiplayer concept video tut preferred',
    'No, I study and read the source code from colyseus github, by the way I would like a some of example of projects more than tutorial.',
    'Full exemple client/server',
    'Prefer written but video is fine as well - How it works and multiple case example that would be useful in a real game',
    'backend/server architecture',
    'Good colyseus architecture, full games tutorials from A-Z (templates are tricky to follow)',
    'Schema data, optimization, scale, debug',
    'Typescript',
    'In depth tutorial about Presence and Drivers; a full tutorial on scaling. Would also like more tutorials on Collections and a tutorial about RelayRooms would be awesome. Thanks, Jim',
    'simple game like agar io on all client libraries if possible (especially Defold)',
    'real-time performant schema "interest" filtering (e.g. some players dont need information about other players because they\'re far away)',
    'Scaling Colyseus on Kubernetes',
    'Maybe like a warcraft-esque tutorial where each player has limited visibility of the same field and therefore only receives some of the state (depending on position etc.). I would love to see how that would be handled in a relatively performant matter',
    'Interest groups / other ways to scale Colyseus rooms in a large world.',
    'Using coloseus with angular',
    'Scaling, message transfer optimization, pitfalls',
    'Multiplayer platformer or top down shooter. With enemies that all players can team up with to beat.',
    'To be honest I would rather see a more generalized C# implementation that doesnt rely on Unity and a generalized C++ port so those of us using Unreal can implement it.',
    'How to handle separating various responsibilities between client and server. Like should I send animation control events from server simulation or send only game state and let client side try to match correct animation and guess animation progress status from state data.',
    'migration guide to 0.15',
    'A) condensed, fully working, mini game with focus on state syhchro, so new comers have something to start with. How to make shared message TS types for both client and server to avoid mistakes. B) change order of docs.colyseus.io, so server-side is first and client-side is second. We usually start coding with game logic.',
    'I know everything :) even rewritten c# client',
    'Unity integration',
    'Classic ways to make every kind of games with Colyseus on beginer level.',
    'RPG',
    'limitations of input`s speed, ways to handle inconsistent input lag, how to monitor server`s capacities and bottlenecks. As for my opinion what u should do as devs - post large link with "how to easy deploy ur host server on different engines" with timemarks, so people do not miss it even if they`re blind. sorry if it sounded toxic I`m just awkwardly trying to help',
    'Simple start to finish game server for Defold',
    'Action RPG Multiplayer',
    'Id love a more low level tutorial - exploring how to implement custom logic using the broadcasting methods. Filtering coverage in tutorials would be great too',
    'open to about anything',
    'A simple hello world or basic movement tutorial',
    'Making a turn-based card game using Godot and Colyseus',
    'How to organize code for big projects',
    'I would love a more in depth way to explain best practices for updating entities and matchmaking on the server side',
    'better understanding of sorta “multiplayer architecture “? obv it differs from game to game somewhat, but theres a big gap between having colyseus all set up and ready to code and whatnot, and getting synced working multiplayer gameplay going',
    'Anything that contributes to lowest possible latency with Colyseus (e.g. client prediction + remediation)',
    'Some step by step Phaser 3 simple platformer with server side physics would be cool',
    'clarification on various ways to setup schema definitions, especially in JavaScript. or if it makes sense, force TypeScript on the server or only supply documentation as such.',
    'Simple RPC and replication tutorials',
    'Linear interpolation of past game states (best practices for authoritative server model)',
    'in-depth tutorial about adding bots, and differences between using them inside the server to manipulate state or actually connect as a client from inside the server. what are these tradeoffs?',
    'Client-side Prediction,Lag Compensation,Snapshot Interpolation',
    'i think the tutorial set that exists is great, would love to see an example of how to use filtered broadcast.',
    'How to use properly with things like React and such, which might not be straight forward in regards to not repainting everything onStateChange. TBH, I\'d rather have the state change mechanism improved, most probably having multiple onChange handlers on state structures. For example, I had two places in the web menu where both should\'ve shown the same number (think planet resources or something) but one place would update and the update lost in another. This would be nice to solve with something like rxjs or just have onChange handle multiple listeners or something in that area. I ended up using a forceRender that happens on the onStateChange which can be subscribed to multiple times (in my React project, which in turn hosted a canvas for the game itself while React was for the UI). TBH2, I am now considering an approach that does not use Colyseus, but I had lots of good time with it and will consider it in future projects.',
    'More in-depth Server setup and better server knowledge',
    'Best practices handling really complex and nested game states. For example, why can\'t I reuse schema instances? How should I avoid doing that? These type of questions.',
    'Would be amazing to see a tutorial series of best practices and possibly unity usage as well. Having trouble with unity and graceful handling of connection',
    'Diving into colyseus core',
    'Documentation closer to Phaser3\'s',
    'for GameMaker use ^_^',
    'High-level differentiation between game types, what do you recommend for different game types?',
    'metrics integration with Grafana',
    'Tutorial about balancing stress server',
    'A comprehensive guide on how to make a simple game with collisions, enemies and a tilemap and deploying it on Arena. There\'s lots of guides for how to make a singleplayer game, but figuring out how to handle things like collisions and spawning/moving enemies with multiple players is a bit more rare.',
    'Moving player from Room to another (usefull for MMORPG)',
    'Best Practices',
    'Simple Complete Game',
    'User database integration for saving progress and some sample pvp where players are attacking each other with melee and ranged weapons. I want to see what are some of the best practices in terms of having smooth fighting mechanics that include dealing damage to other players.',
    'Optimizing multiplayer with Area of Interests, Syncing complex objects/data with schemas',
    'Unity Fps ( interpolation of shoots)',
    'Just more video tutorials in general on creating servers for different games',
    'complex server project code organization and architecture',
    'Command Chaining in TypeScript, base implementation of a Game Loop with automated state machine updates',
    'how to keep data synchronous',
    'Reallife examples',
    'We need an in-depth tutorial on using the redis presence that comes with the upgraded Arena plans. A tutorial on how to use all the major presence features, such as querying all the currently active games for some metadata, etc.',
    'Do the simple things would be good. Evaluate making tutorials in English and Spanish. "Colyseus is a good tool !!!" regards',
    'In addition to my suggestion for the redis presence tutorial I would also appreciate one on using auth with Colyseus. For example, using a Supabase login (or Firebase/AWS Cognito) to authenticate a player account on a Colyseus server. Thanks.',
    'Client prediction, server reconciliation, input buffer, others real time multiplayer things',
    'Multiplayer tech explained',
    'Scaling'
]

</script>
<style scoped>
.wish:nth-child(even) {
    @apply bg-gray-200;
}
</style>