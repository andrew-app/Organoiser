import com.adamratzman.spotify.*
import java.io.File

fun main() {
    val codeVerifier = "thisisaveryrandomalphanumericcodeverifierandisgreaterthan43characters"
    val codeChallenge = getSpotifyPkceCodeChallenge(codeVerifier) // helper method
    val url: String = getSpotifyPkceAuthorizationUrl(
        SpotifyScope.PLAYLIST_READ_PRIVATE,
        SpotifyScope.PLAYLIST_MODIFY_PRIVATE,
        SpotifyScope.USER_FOLLOW_READ,
        SpotifyScope.USER_LIBRARY_MODIFY,
        clientId = readFileDirectlyAsText("src/main/resources/clientID.txt"),
        redirectUri = "http://localhost:8888/callback",
        codeChallenge = codeChallenge
    )
    println(url)
}

fun readFileDirectlyAsText(fileName: String): String
        = File(fileName).readText(Charsets.UTF_8)