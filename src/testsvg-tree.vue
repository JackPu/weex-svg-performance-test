<template>
  <div class="page">
    <svg style="width:400px;height:300px;">
      <defs>
      <linearGradient id="trunkgrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#996d2e"/>
        <stop offset="100%" stop-color="#d5bc79" />
      </linearGradient>

      <radialGradient id="shadow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stop-color="#000000" />
        <stop offset="100%" stop-color="#666666"/>
      </radialGradient>
      </defs>
      <ellipse cx="188" cy="273" rx="80" ry="20" fill="url(#shadow)" />
      <ellipse cx="188" cy="273" rx="24" ry="5" fill="url(#shadow)" />
      <polygon points="182,211 187,211 187,274 180,274" fill="url(#trunkgrad)" />
      <polygon points="187,211 196,211 198,274 187,274" fill="#996d2e" />

      <polygon points="187,28 154,162 116,159" fill="#a5df66" stroke="#a5df66" />
      <polygon points="154,162 116,159 155,218" fill="#79b544" stroke="#79b544" />

      <polygon points="187,28 216,114 154,162"  fill="#619b37" stroke="#619b37" />
      <polygon points="187,28 216,114 264,162 204,28" fill="#619b37" stroke="#619b37" />
      <polygon points="216,114 264,162 223,210" fill="#54892f" stroke="#54892f" />
      <polygon points="216,114 223,210 154,162" fill="#5c9433" />

      <polygon points="154,162 223,210 188,211" fill="#54892f" stroke="#54892f" />
      <polygon points="154,162 188,211 155,218" fill="#54892f" stroke="#54892f" />

      <polygon points="200,70 216,114 185,137" fill="#79b544" stroke="#79b544" />
      <polygon points="216,114 220,167 185,137" fill="#588f32" />
      <polygon points="216,114 250,148 220,167" fill="#598d33" />

    </svg>
  </div>
   
</template>

<style>
  .page{
    flex: 1;
    padding-top: 20px;
    background-color: #fff;
  }
</style>