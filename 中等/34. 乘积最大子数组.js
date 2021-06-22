const question = `给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。`;

/**
 * @param {number[]} nums
 * @return {number}
 */

// 思路
// 题目：求 [i, j] 子数组的最大乘积
// i 和 j 是变化的，我们可以固定一端：考察 i 移动，j 固定，形成的子数组们中的最大乘积，即考察：以 j 项为末尾项的子数组们中的最大乘积
// 找到局部最优解后，我们再移动 j，求不同的 j 的最优解，再优中取优
// 以 j 为末尾项的子数组为了能有最大乘积，j 前面的项的乘积要尽量大（后面再说这里的错误）
// 这个所谓的 j 前面的项，其实就是 i 移动，j - 1 固定的子数组
// 可见 j 的最优解，依赖 j - 1 的最优解，所以可以用 dp 数组记录曾经的最优解
// 状态转移方程
// dp[ j ] = dp[ j - 1 ] * nums[ j ]
// dp[j]=dp[j−1]∗nums[j]

// dp[0] = nums[0]dp[0]=nums[0]，因为 j = 0j=0 时，ii 只能为 0，子数组只有第 0 项
// 遍历 jj，逐个求出 dp 的每一项，看看哪一项最大
// 错误！忽略了负负得正
// 我们把 dp[ j - 1 ]dp[j−1] 直接拿过来相乘，不一定是局部最优解
// 如果 jj 项是负数，则 dp[ j - 1 ]dp[j−1] 是最大积的话，得到 dp[ j ]dp[j] 会是最小的。此时 j - 1j−1 的最优解应当是负数的最大，即最小积
// 如果 jj 项是正数，把前面的最大积直接拿来乘，没问题
// 即，对 j 来说，j - 1j−1 的最优解可能是最大积，也可能是最小乘积
// 因此，dp[i]dp[i] 要放两项了，一项是局部最大积，一项是局部最小积
// dp[i][0]dp[i][0]： 从第 0 项到第 i 项范围内的子数组的最小乘积
// dp[i][1]dp[i][1]： 从第 0 项到第 i 项范围内的子数组的最大乘积
// base case：
// dp[0][0] = nums[0]dp[0][0]=nums[0]
// dp[0][1] = nums[0]dp[0][1]=nums[0]
// 对于以 ii 项为末尾项的子数组能产生的最小积，它有 3 种情况：
// 不和别人乘，就它自己
// 自己是负数，希望乘上前面的最大积
// 自己是正数，希望乘上前面的最小积
// 所以，dp[i][0]dp[i][0] 取三种情况中的最小值
// dp[i][0] = min( dp[i - 1][0] * nums[i],dp[i - 1][1] * nums[i], nums[i])
// dp[i][0]=min(dp[i−1][0]∗nums[i],dp[i−1][1]∗nums[i],nums[i])

// 类似的，dp[i][1]dp[i][1] 值取三种情况中的最大值
// dp[i][1] = max( dp[i - 1][0] * nums[i], dp[i - 1][1] * nums[i], nums[i])
// dp[i][1]=max(dp[i−1][0]∗nums[i],dp[i−1][1]∗nums[i],nums[i])

// 降维
// 观察发现， dp[i][x]dp[i][x] 只和 dp[i - 1][x]dp[i−1][x] 有关，与再之前的结果无关
// 我们用两个变量分别去存储每个位置算出的最小积和最大积
// base case
// prevMin = nums[0]prevMin=nums[0]
// prevMax = nums[0]prevMax=nums[0]
// 状态转移方程:
// prevMin = min( prevMin * nums[i], prevMax * nums[i], nums[i])
// prevMin=min(prevMin∗nums[i],prevMax∗nums[i],nums[i])

// prevMax = max( prevMin * nums[i], prevMax * nums[i], nums[i])
// prevMax=max(prevMin∗nums[i],prevMax∗nums[i],nums[i])

// 等号右边的 prevMin 和 prevMax 属于 dp[i - 1]dp[i−1] 的。等号左边的 prevMin 和 prevMax 属于 dp[i]dp[i] 的
// 错误：第一个等式求出的新 prevMin 用在第二个等式的计算
// 解决：用变量暂存 prevMin * nums[i]prevMin∗nums[i] 和 prevMax * nums[i]prevMax∗nums[i]

var maxProduct = (nums) => {
	let res = nums[0];
	let prevMin = nums[0];
	let prevMax = nums[0];
	let temp1 = 0,
		temp2 = 0;
	for (let i = 1; i < nums.length; i++) {
		temp1 = prevMin * nums[i]; // 6 -6 -48
		temp2 = prevMax * nums[i]; // 6 -12 -8
		prevMin = Math.min(temp1, temp2, nums[i]); // 3 -12 -48
		prevMax = Math.max(temp1, temp2, nums[i]); // 6 -2 4

		res = Math.max(prevMax, res); // 6 6 6
		console.log(temp1, temp2, prevMin, prevMax, res);
	}
	return res;
};

console.log(maxProduct([2, 3, -2, 4]));
// console.log(maxProduct([-2]));
// console.log(maxProduct([-2, 3, -4]));
