export class Alliance {
    public static cache: Cache<Alliance>;
    public static maxLife: number;
    public name: string;
    public id: string;
    public tag: string;
    public memberCount: number;
    public guildCount: number;
    public founded: Date;
    public founderId: string;
    public guildIds: string[];
    public getFounder(): Promise<Player | null>;
    public getGuilds(max: number): Promise<Guild[]>;
}

export class Guild {
    public static cache: Cache<Guild>;
    public static maxLife: number;
    public name: string;
    public id: string;
    public alliance: Alliance | null;
    public memberCount: number;
    public founded: Date;
    public founderId: string;
    public getFounder(): Promise<Player | null>;
}

export class Player {
    public static cache: Cache<Player>;
    public static maxLife: number;
    public name: string;
    public id: string;
    public guild: Guild | null;
    public alliance: Alliance | null;
    public avatar: PlayerAvatar;
}

export class PlayerAvatar {
    public code: string;
    public ringCode: string;
}

export interface CacheItem<T> {
    content: T;
    timestamp: number
}
export type Cache<T> = Map<string, CacheItem<T>>;

export declare function getPlayerByName (name: string): Promise<Player | null>;
export declare function getPlayerById (id: string): Promise<Player | null>;
export declare function getGuildByName (name: string): Promise<Guild | null>;
export declare function getGuildById (id: string): Promise<Guild | null>;
export declare function getAllianceById (id: string): Promise<Alliance | null>;

export declare function getPlayerId (name: string): Promise<string>;
export declare function getGuildId (name: string): Promise<string>;
