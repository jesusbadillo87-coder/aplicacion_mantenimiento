$port = 8085
$root = $PSScriptRoot

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
try {
    $listener.Start()
    Write-Host "Servidor corriendo en http://localhost:$port/"
    Write-Host "Presiona Ctrl+C para detener."

    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response

            $path = $request.Url.LocalPath
            if ($path -eq "/") { $path = "/index.html" }
            
            # Decodificar la URL para manejar espacios y caracteres especiales
            $path = [System.Net.WebUtility]::UrlDecode($path)
            $filePath = Join-Path $root $path

            if (Test-Path $filePath -PathType Leaf) {
                $content = [System.IO.File]::ReadAllBytes($filePath)
                $response.ContentLength64 = $content.Length
                
                # Simple MIME type checking
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                switch ($ext) {
                    ".html" { $response.ContentType = "text/html" }
                    ".css"  { $response.ContentType = "text/css" }
                    ".js"   { $response.ContentType = "application/javascript" }
                    ".png"  { $response.ContentType = "image/png" }
                    ".webp" { $response.ContentType = "image/webp" }
                    ".jpg"  { $response.ContentType = "image/jpeg" }
                    ".pdf"  { $response.ContentType = "application/pdf" }
                    ".mp4"  { $response.ContentType = "video/mp4" }
                    ".glb"  { $response.ContentType = "model/gltf-binary" }
                    default { $response.ContentType = "application/octet-stream" }
                }
                
                $response.OutputStream.Write($content, 0, $content.Length)
            } else {
                $response.StatusCode = 404
                Write-Host "404 - No encontrado: $path"
            }
            $response.Close()
        }
        catch {
            Write-Host "Advertencia de conexión: $($_.Exception.Message)" -ForegroundColor Yellow
        }
    }
}
catch {
    Write-Error "Ocurrió un error al iniciar el servidor: $($_.Exception.Message)"
    if ($_.Exception.Message -like "*conflict*" -or $_.Exception.Message -like "*conflicto*") {
        Write-Host "SUGERENCIA: El puerto $port tiene un conflicto. Intentando con otro puerto..." -ForegroundColor Yellow
    }
}
finally {
    if ($null -ne $listener -and $listener.IsListening) {
        $listener.Stop()
    }
}

