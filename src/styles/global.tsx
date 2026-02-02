import "@styles/global.css";

export namespace Themes {

    // Shared
    //
    ////////////////////////////////////
    export namespace Shared {

        // Colors
        export namespace Colors {
            export const Orange = "#f58220";
        };
    };

    // Light Theme
    //
    ////////////////////////////////////
    export namespace Light {

        // Colors
        export namespace Colors {
            export const Background = "#f8fafc";
            export const Foreground = "#ffffff";
        };
    };

    // Dark Theme
    //
    ////////////////////////////////////
    export namespace Dark {

        // Colors
        export namespace Colors 
        {
            export const Background = "#000000";
            export const Foreground = "#000000";
            export const Title      = "#ffffff";
            export const Subtitle   = "#475569";
        };
    };
};

export default Themes;