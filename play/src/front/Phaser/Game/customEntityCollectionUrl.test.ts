import { describe, expect, it } from "vitest";
import { getCustomEntityCollectionUrl } from "./customEntityCollectionUrl";

describe("getCustomEntityCollectionUrl", () => {
    const wamUrl = new URL("https://play.digi-work.ir/map-storage/ourmaps/digiwork.wam");

    it("separates the public map-storage prefix from the entity folder", () => {
        expect(getCustomEntityCollectionUrl("/map-storage", "assets/entities", "entities.json", wamUrl)).toBe(
            "https://play.digi-work.ir/map-storage/assets/entities/entities.json",
        );
    });

    it("does not duplicate a trailing slash", () => {
        expect(getCustomEntityCollectionUrl("/map-storage/", "/assets/entities", "entities.json", wamUrl)).toBe(
            "https://play.digi-work.ir/map-storage/assets/entities/entities.json",
        );
    });
});
