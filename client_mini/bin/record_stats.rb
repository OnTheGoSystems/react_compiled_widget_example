class Stats
  def record!
    build_compressed!
    content = calculate.map { |k, v| [k, v].join(' = ') }.join("\n")
    puts "\e[93m#{content}\e[0m"
    save(content)
  end

  def calculate
    {
      'Size      ' => human_size(file_size("../public/mini_app/main.js")),
      'Compressed' => human_size(file_size("../public/mini_app/main.js.gz"))
    }
  end

  private

  def build_compressed!
    system('gzip -kf ../public/mini_app/main.js')
  end

  def save(content)
    File.open('../public/mini_app/stats.txt', 'w') do |f|
      f.puts content
    end
  end

  def file_size(path)
    File.size(path).to_f
  end

  def human_size(number)
    levels = {
      'B'  => 1024,
      'KB' => 1024 * 1024,
      'MB' => 1024 * 1024 * 1024,
      'GB' => 1024 * 1024 * 1024 * 1024,
      'TB' => 1024 * 1024 * 1024 * 1024 * 1024
    }
    levels.each_pair do |e, s|
      return "#{(number.to_f / (s / 1024)).round(2)} #{e}" if number < s
    end
    'N/A'
  end
end

Stats.new.record!