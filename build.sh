#!/bin/bash
echo "start auto build"
cd /home/ubuntu/shidao_blog
git pull && pnpm run build