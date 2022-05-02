import com.adamratzman.spotify.*

suspend fun main() {
    val codeVerifier = "thisisaveryrandomalphanumericcodeverifierandisgreaterthan43characters"
    val codeChallenge = getSpotifyPkceCodeChallenge(codeVerifier) // helper method
    val url: String = getSpotifyPkceAuthorizationUrl(
        SpotifyScope.PLAYLIST_READ_PRIVATE,
        SpotifyScope.PLAYLIST_MODIFY_PRIVATE,
        SpotifyScope.USER_FOLLOW_READ,
        SpotifyScope.USER_LIBRARY_MODIFY,
        clientId = "",
        redirectUri = "http://localhost:8888/callback",
        codeChallenge = codeChallenge
    )
    println(url)
}