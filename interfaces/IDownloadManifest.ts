export interface IDownloadManifest {
    version: string,
    notes: string,
    pub_date: string,
    platforms: {
        [key: string]: IDownloadPlatform
    }
}

export interface IDownloadPlatform {
    signature: string,
    display: string,
    url: string,
    compressed: string,
    ext: string,
    is_server: boolean
}