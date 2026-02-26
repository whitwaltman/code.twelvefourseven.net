#!/usr/bin/env bash

# Exit on error, undefined variables, and pipe failures
set -e
set -u
set -o pipefail

ZOLA_VERSION=0.22.1

echo "Downloading Zola v${ZOLA_VERSION}..."
curl -sL "https://github.com/getzola/zola/releases/download/v${ZOLA_VERSION}/zola-v${ZOLA_VERSION}-x86_64-unknown-linux-gnu.tar.gz" | tar -xz

if [ -f .gitmodules ]; then
    echo "Updating submodules..."
    git submodule update --init --recursive
fi

echo "Starting Zola build..."
./zola build --config zola.toml