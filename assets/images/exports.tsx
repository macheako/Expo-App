import * as AnimationList from "@assets/images/animations";
import * as BackgroundList from '@assets/images/backgrounds';

export namespace Images {
    export const Animations = AnimationList.Animations;
    export const Backgrounds = BackgroundList.Backgrounds;

    export namespace UnrealBowlingLogo {
        export namespace Dark {
            export const ImageWithText  = require("./UBLogo-Full-White.png");
            export const TextOnly       = require("./UBLogo-Text-White.png");
            export const ImageOnly      = require("./UBLogo-Ball.png");
        };

        export namespace Light {
            export const ImageWithText  = require("./UBLogo-Full-Black.png");
            export const TextOnly       = require("./UBLogo-Text-Black.png");
            export const ImageOnly      = require("./UBLogo-Ball.png");
        };
    };

    export namespace CrunchyLogo {
        export namespace Dark {
            export const ImageWithText  = require("./CrunchyLogo-White.png");
            export const TextOnly       = require("./UBLogo-Text-White.png");
            export const ImageOnly      = require("./CrunchyLogo.png");
        };

        export namespace Light {
            export const ImageWithText  = require("./CrunchyLogo-Black.png");
            export const TextOnly       = require("./UBLogo-Text-Black.png");
            export const ImageOnly      = require("./CrunchyLogo.png");
        };
    }
};
export default Images;