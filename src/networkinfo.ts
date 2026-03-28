// export default async function (ctx: Ctx) {
//     const now = new Date();
//     const pad = (n: number) => String(n).padStart(2, "0");
//     const timeStr = `${pad(now.getHours())}:${pad(now.getMinutes())}`;

//     const C = {
//         bg: [{ light: '#FFFFFF', dark: '#1C1C1E' }, { light: '#F5F5F9', dark: '#0C0C0E' }],
//         main: { light: '#1C1C1E', dark: '#FFFFFF' },
//         sub: { light: '#48484A', dark: '#D1D1D6' },
//         muted: { light: '#8E8E93', dark: '#8E8E93' },
//         gold: { light: '#B58A28', dark: '#D6A53A' },
//         red: { light: '#CA3B32', dark: '#FF453A' },
//         teal: { light: '#2E8045', dark: '#32D74B' },
//         blue: { light: '#3A5F85', dark: '#5E8EB8' },
//         purple: { light: '#6B4C9A', dark: '#8B6AA8' },
//         cyan: { light: '#628C7B', dark: '#73A491' },
//         pingBg: { light: '#F2F2F7', dark: '#2C2C2E' },   // 双轨胶囊底色
//         proxyGreen: { light: '#2E8045', dark: '#32D74B' } // 代理盾牌色
//     };

//     const httpGet = async (url: string) => {
//         try {
//             const start = Date.now();
//             const resp = await ctx.http.get(url, { headers: { "User-Agent": "Mozilla/5.0" }, timeout: 8000 });
//             const json = await resp.json();
//             return { data: json.data || json, ping: Date.now() - start };
//         } catch (e) {
//             return { data: {}, ping: 0 };
//         }
//     };

//     const getFlagEmogi = ()
// }
