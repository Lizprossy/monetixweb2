(self.__BUILD_MANIFEST = {
    __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
    "/": ["static/chunks/pages/index-18282ee57da27b39.js"],
    "/_error": ["static/chunks/pages/_error-8353112a01355ec2.js"],
    "/magazines": ["static/chunks/pages/magazines-c16eae5fe1f4b737.js"],
    "/magazines/[...slug]": [
        "static/css/42a5393d0e4e1a60.css",
        "static/chunks/pages/magazines/[...slug]-bddb946d9725eac6.js",
    ],
    sortedPages: ["/", "/_app", "/_error", "/magazines", "/magazines/[...slug]"],
}),
    self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
