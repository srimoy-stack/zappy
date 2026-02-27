export type KDSRole =
    | 'KDS_USER'
    | 'STORE_MANAGER';

export function canStartStage(role: KDSRole) {
    return role === 'KDS_USER' || role === 'STORE_MANAGER';
}

export function canCompleteStage(role: KDSRole) {
    return role === 'KDS_USER' || role === 'STORE_MANAGER';
}

export function canDelayOrder(role: KDSRole) {
    return role === 'STORE_MANAGER';
}

export function canCancelOrder(role: KDSRole) {
    return role === 'STORE_MANAGER';
}

export function canOverrideStage(role: KDSRole) {
    return role === 'STORE_MANAGER';
}

export function canSendCustomMessage(role: KDSRole) {
    return role === 'STORE_MANAGER';
}

export function canReopenOrder(role: KDSRole) {
    return role === 'STORE_MANAGER';
}
