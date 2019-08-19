task :default => [:verify]

desc 'verify'
task :verify do
    Rake::Task['lint'].invoke
end

desc 'lint'
task :lint do
    sh 'mdl --style ./markdownlint-style.rb *.md'
end
