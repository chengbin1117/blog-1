module.exports = {
    base: '/blog/',
    title: '前端学习总结', 
    description: '前端学习总结',
    head: [
        ['link', { rel: 'icon', href: 'https://cdn.wangyaxing.cn/icon-128x128.png' }],
    ],
    themeConfig: {
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        nav: [
            { 
                text: '首页', 
                link: '/'
            },
            { 
                text: '算法',
                link: '/algorithm/'
            },
            {  text: '手写代码', 
               link: '/jsCode/'
            },
            {  text: '面试题', 
               link: '/interview/'
            },
            { 
                text: '100天',
                link: '/100day/'
            },
            { text: 'Github', link: 'https://github.com/funnycoderstar/Front-end-summary' },
        ],
        sidebar: {
            '/algorithm/': [
                ['/algorithm/', '算法专题'],
                {
                    title: '树',
                    collapsable: true,
                    children: [
                        ['/algorithm/树/树的遍历', '树的遍历(DFS和BFS)'],
                        ['/algorithm/树/路径总和', '路径总和(I、II、III)'],
                        ['/algorithm/树/相同的树', '相同的树'],
                        ['/algorithm/树/对称二叉树', '对称二叉树'],
                        ['/algorithm/树/翻转二叉树', '翻转二叉树'],
                        ['/algorithm/树/另一个树的子树', '另一个树的子树'],
                        ['/algorithm/树/验证二叉搜索树', '验证二叉搜索树'],
                    ]
                },
                {
                    title: '链表',
                    collapsable: true,
                    children: [
                        ['/algorithm/链表/合并两个有序链表', '合并两个有序链表'],
                        ['/algorithm/链表/反转链表', '反转链表'],
                        ['/algorithm/链表/回文链表', '回文链表'],
                        ['/algorithm/链表/倒数第K个节点', '倒数第K个节点'],
                        ['/algorithm/链表/找出链表的中间节点', '找出链表的中间节点'],
                        ['/algorithm/链表/两个链表的第一个公共节点', '两个链表的第一个公共节点'],
                    ]   
                },
                {
                    title: '数组',
                    collapsable: true,
                    children: [
                        ['/algorithm/数组/打乱数组', '打乱数组'],
                        ['/algorithm/数组/构建乘积数组', '构建乘积数组'],
                        ['/algorithm/数组/使数组唯一的最小增量', '使数组唯一的最小增量'],
                        ['/algorithm/数组/扑克牌中的顺子', '扑克牌中的顺子'],
                    ]   
                },
                {
                    title: '动态规划',
                    collapsable: true,
                    children: [
                        ['/algorithm/动态规划/买卖股票的最佳时机I', '买卖股票的最佳时机I'],
                        ['/algorithm/动态规划/买卖股票的最佳时机II', '买卖股票的最佳时机II'],
                        ['/algorithm/动态规划/无重复字符的最长子串', '无重复字符的最长子串'],
                        ['/algorithm/动态规划/最大子序和', '最大子序和'],
                        ['/algorithm/动态规划/最长回文子串', '最长回文子串'],
                    ]   
                },
            ],
            '/jsCode/': [
                ['/jsCode/', '手写代码系列'],
                ['/jsCode/防抖', '手写一个防抖'],
                ['/jsCode/节流', '手写一个节流'],
                ['/jsCode/浅拷贝和深拷贝', '浅拷贝和深拷贝'],
                ['/jsCode/数组乱序', '数组乱序'],
                ['/jsCode/函数柯里化', '函数柯里化'],
                ['/jsCode/实现一个Promise', '实现一个Promise'],
                ['/jsCode/实现一个new', '实现一个new'],
                ['/jsCode/实现instanceof', '实现instanceof'],
                ['/jsCode/手写继承', '手写继承'],
                // '/jsCode/手动实现JSONP',
                // '/jsCode/基于Promise的ajax封装',
                // '/jsCode/单例模式',
                // '/jsCode/异步循环打印',
                // '/jsCode/图片懒加载',
            ],
            '/interview/': [
                ['/interview/', '面试题专题'],
                {
                    title: 'React',
                    collapsable: true,
                    children: [
                        ['/interview/React/生命周期介绍', 'React生命周期'],
                        ['/interview/React/合成事件', 'React合成事件'],
                    ]
                },
                {
                    title: 'Webpack',
                    collapsable: true,
                    children: [
                        ['/interview/Webpack/webpack的loader和plugin', 'webpack的loader和plugin'],
                        ['/interview/Webpack/webpack热更新原理', 'webpack热更新原理'],
                        ['/interview/Webpack/优化构建速度', '优化构建速度'],
                        ['/interview/Webpack/优化代码体积', '优化代码体积'],
                    ]   
                },
            ],
            '/100day/': [
                ['/100day/', '100天计划专题'],
                {
                    title: '001',
                    collapsable: true,
                    children: [
                        ['/100day/001/import和require', 'import和require'],
                        ['/100day/001/买卖股票的最佳时机', '买卖股票的最佳时机'],
                    ]
                },
                {
                    title: '002',
                    collapsable: true,
                    children: [
                        ['/100day/002/setTimeout和requestAnimationFrame', 'setTimeout和requestAnimationFrame'],
                        ['/100day/002/合并两个有序链表', '合并两个有序链表'],
                    ]   
                },
            ],
        }
    }
}