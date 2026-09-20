import { affiliatePrograms, ownedReferrals } from './affiliate-programs.js';

export const affiliateStatusLabels = {
  documented: '官方有说明', limited: '有适用限制', login: '需登录核验',
  unknown: '未确认公开计划', unreachable: '暂时无法访问'
};
export const affiliateKindLabels = {
  cash: '佣金／可提现奖励', credits: '站内额度', mixed: '多类奖励',
  enterprise: '企业合作', unknown: '类型待核验'
};
export function affiliateFor(provider) {
  return affiliatePrograms.find(r => r.id === provider.id ||
    (!provider.official && provider.rank && r.scope === 'relay' && r.rank === provider.rank));
}
export function activeReferral(program, referrals = ownedReferrals) {
  if (!program || program.id === 'official-cerebras') return null;
  const link = referrals[program.id];
  if (!link || link.status !== 'active' || link.ownerConfirmed !== true ||
    !['permitted','no-published-restriction'].includes(link.publicSharingReview) || !/^\d{4}-\d{2}-\d{2}$/.test(link.reviewedAt || '')) return null;
  try {
    const url = new URL(link.url);
    if (url.protocol !== 'https:' || url.username || url.password) return null;
    return url.href;
  } catch { return null; }
}
export function providerDestination(provider) {
  const program = affiliateFor(provider);
  const referral = activeReferral(program);
  return { url: referral || program?.url || provider.url, sponsored: Boolean(referral) };
}
