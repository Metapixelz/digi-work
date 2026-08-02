export function getCustomEntityCollectionUrl(
    publicMapStoragePrefix: string | undefined,
    entitiesFolderPath: string,
    entityCollectionFile: string,
    wamUrl: URL,
): string {
    const prefix = publicMapStoragePrefix ? `${publicMapStoragePrefix.replace(/\/$/, "")}/` : "";
    const mapStoragePath = `${prefix}${entitiesFolderPath.replace(/^\//, "")}/${entityCollectionFile}`;

    return new URL(mapStoragePath, wamUrl).toString();
}
