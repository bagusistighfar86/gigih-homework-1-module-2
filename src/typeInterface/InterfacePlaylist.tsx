export interface ExternalUrls {
    spotify: string;
}

export interface ExternalUrls2 {
    spotify: string;
}

export interface Owner {
    external_urls: ExternalUrls2;
    href: string;
    id: string;
    type: string;
    uri: string;
    display_name: string;
}

export interface Tracks {
    href: string;
    total: number;
}

export interface imagePlaylist{
    url: string;
}

export interface PlaylistItem {
    collaborative: boolean;
    description: string;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: imagePlaylist[];
    name: string;
    owner: Owner;
    public: boolean;
    snapshot_id: string;
    tracks: Tracks;
    type: string;
    uri: string;
}

export interface PlaylistResponse {
    href: string;
    items: PlaylistItem[];
    limit: number;
    next: string;
    offset: number;
    previous?: string;
    total: number;
}
